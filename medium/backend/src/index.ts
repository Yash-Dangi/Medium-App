import { Hono } from 'hono'
import { cors } from 'hono/cors';
import {decode , verify , sign} from 'hono/jwt'
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {z} from 'zod'
// import { sign } from 'crypto';
import jwt from 'jsonwebtoken'
import userRouter from './routes/user';
import blogRouter from './routes/blog';

const app = new Hono<{
  Bindings : {
     DATABASE_URL : string
     JWT_SECRET : string
  }
  Variables : {
     user_id : string
    //  prisma : PrismaClient
  }
}>().basePath('/api/v1')

app.use('/*' , cors());
// app.use('*', (c) => {
// 	const prisma = new PrismaClient({
//       datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   c.set('prisma', prisma);
// })
// import {DATABASE_URL} from "wrangler.toml"
app.use('/blog/*', async (c , next) => {
        console.log("Reached MiddleWare"); 
        // const body = await c.req.json();
        const token: string = c.req.header('authorization');
        console.log('middleware reached');
        console.log(token);
        if(token.startsWith('Bearer '))
        {

            //  console.log('Token Col')   
             const tokenArray = token.split(' ');
             const jwtToken = tokenArray[1];
            //  console.log(token);
            //  console.log(jwtToken);
             const decodedData = await verify(jwtToken , c.env?.JWT_SECRET);
             if(decodedData)
             {
                  c.set('user_id' , decodedData.id);
                  console.log('Completed Middle ware Authentication');
                  await next()    
             }
             else
             {
                 c.status(404);
                 return c.json({
                  message : "Wrong Token"
                 });
             }
        } 
        c.status(404);
        return c.json({
          message : "Token is incorrect"
        })
})

app.route('/user' , userRouter);
app.route('/blog' , blogRouter);
export default app

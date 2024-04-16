import { Hono} from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
// import z from 'zod'
import {signupInput, signinInput} from '@yashd10/common-app/dist/index'
// import jwt from 'jsonwebtoken'
import {sign} from 'hono/jwt'
const userRouter = new Hono<{
    Bindings : {
          DATABASE_URL : string,
          JWT_SECRET : string
    }
}>();

userRouter.post('/signup' , async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
      const body = await c.req.json();
      const parsedBody = signupInput.safeParse(body);
      if(!parsedBody.success)
      {
           c.status(403);
        
           return c.json({
             message : "Enter the information in correct formats"
           }) 
      }
      const email  = body.email;
      const password  = body.password;
      const name  = body.name;
      const response = await prisma.user.create({
         data : {
              email,
              password,
              name
         }
      }) 
      if(response)
        {
            c.status(200)
            const token =  await sign({user_id : response.id} , c.env?.JWT_SECRET);
            return c.json({
                token    
            })
        }
        else
        {
            c.status(411)
            return c.json({
              message : "Error While Signing Up/Enter the correct information"
            })
        }
  })
  
  userRouter.post('/signin' , async (c)=>{
      const prisma = new PrismaClient({
      datasourceUrl : c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
      const body = await c.req.json();
      const parsedBody = signinInput.safeParse(body);
      if(!parsedBody.success)
      {
           c.status(403);
        
           return c.json({
             message : "Enter the information in correct formats"
           }) 
      }
      const email  = body.email;
      const password  = body.passoword;
      // const name  = body.name;
      const user = await prisma.user.findUnique({
        where : {
             email ,
             password
        }
      });
      if(user)
      {
          const token = await sign({id : user.id}, c.env?.JWT_SECRET);
          c.status(200);
          return c.json({
              token
          })
      }
      c.status(403)
      return c.json({
        message  : "Error While Signing Im"
      });
  })

  export default userRouter;
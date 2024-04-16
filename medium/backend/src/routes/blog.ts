import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {createPostInput, updatePostInput} from '@yashd10/common-app/dist/index'
const blogRouter = new Hono<{
     Bindings : {
         DATABASE_URL : string
         JWT_SECRET : string
     }
     Variables : {
        user_id : string
     }
}>();

blogRouter.post('/' , async (c) => {
       const user_id = c.get('user_id');
       const prisma = new PrismaClient({
        datasourceUrl : c.env?.DATABASE_URL,
        }).$extends(withAccelerate());    
       const body = await c.req.json();
       const parsedBody = createPostInput.safeParse(body);
       if(!parsedBody.success)
       {
              c.status(404);
              return c.json({
                message : "Incorrect Inputs"
              })        
       }
       const title = body.title; 
       const content = body.content;
       const response = await prisma.post.create({
        data : {
             title,
             content,
             authorId : user_id
        }
       })
       if(response)
       {
             c.status(200);
             return c.json({
                 id : response.id
             })       
       }
       c.status(400);
             return c.json({
                 message : "Error While Creating the post"
             })  
});

blogRouter.put('/' , async (c) =>{
      console.log('Put Reached');
      const user_id = c.get('user_id');
      console.log(user_id);
      const prisma = new PrismaClient({
        datasourceUrl : c.env?.DATABASE_URL,
        }).$extends(withAccelerate());    
      const body = await c.req.json();
      const parsedBody = updatePostInput.safeParse(body);
      if(!parsedBody.success)
      {
             c.status(404);
             return c.json({
               message : "Incorrect Inputs"
             })        
      }
      console.log('Zod Succesful');
      const id = body.id;
      const response  = await prisma.post.update({
         where : {
               id : id
         },
         data : {
              title : body.title,
              content : body.content
         },
      }) 
      if(response)
      {
           return c.json({
              message : "Post Updated Successfully"
           })      
      }
      c.status(400);
      return c.json({
        message : "Error While Updating The Post"
      })
})
blogRouter.get('/bulk' , async (c) =>{
  console.log('bulk reached');
   // const user_id = c.get('user_id');
   const prisma = new PrismaClient({
     datasourceUrl : c.env?.DATABASE_URL,
     }).$extends(withAccelerate());    
  
   const response = await prisma.post.findMany({
    select :{
         id : true,
         title : true,
         content : true,
         author : {
          select : {
            name : true,
          }
         }
    }
   });
   if(response)
   {
          return c.json({
              post : response
          })         
   }
   c.status(400);
   return c.json({
       message : "Enter the correct Id"
   })
})

blogRouter.get('/:id' , async (c) =>{
    const user_id = c.get('user_id');
    const id = c.req.param('id');
    const prisma = new PrismaClient({
      datasourceUrl : c.env?.DATABASE_URL,
      }).$extends(withAccelerate());    
    // const body = await c.req.json();
    // const id = body.id;
    const response = await prisma.post.findUnique({
         where : {
             id : parseInt(id)
         },
         select : {
              id : true,
              title : true,
              content: true,
              author : {
                select : {
                  name : true
                }
              }
         }
    });
    if(response)
    {
           return c.json({
               post : response
           })         
    }
    c.status(400);
    return c.json({
        message : "Enter the correct Id"
    })
})


export default blogRouter;
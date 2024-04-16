import { useBlogs } from "../Hooks"
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkelton } from "../components/BlogSkeleton"
export const Blogs = () => {
    const {loading , blogs} = useBlogs();
    if(loading)
        {
             return(
               <>
                <div><Appbar></Appbar></div>
                <div className="flex flex-col items-center pt-24">
                <BlogSkelton></BlogSkelton>
                <BlogSkelton></BlogSkelton>
                <BlogSkelton></BlogSkelton>
                    
                </div>
               </>
             )
        }
    return(
         <>
         <div>
            <Appbar></Appbar>
         </div>
         <div className="flex flex-col items-center pt-24">
             {blogs.map((blog) => {return (<>
                 <BlogCard id = {blog.id} title= {blog.title} content= {blog.content} authorName= {blog.author.name} publishedDate="16 April 2024"></BlogCard>
             </>)})}
         </div>
         </>
      )
}
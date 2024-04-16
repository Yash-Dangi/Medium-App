import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/AppBar";
import { BlogSpinner } from "../components/BlogSpinner";

export default function Blog(){
      const {id}  = useParams();
      const {loading , blog} = useBlog({id : id || ""});
      {console.log(id);}
      if(loading)
      {
            return(
              <div>
                  <Appbar></Appbar>
                  <BlogSpinner></BlogSpinner>
              </div>
            )     
      }
      return (
        <div>
              <FullBlog title = {blog.title} content = {blog.content} authorName={blog.author.name}></FullBlog>
        </div>
      )
}

import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks"
import { FullBlog } from "../components/FullBlog";

export default function Blog(){
      const {id}  = useParams();
      const {loading , blog} = useBlog({id : id || ""});
      {console.log(id);}
      if(loading)
      {
            return(
              <div>
                loading
              </div>
            )     
      }
      return (
        <div>
              <FullBlog title = {blog.title} content = {blog.content} authorName={blog.author.name}></FullBlog>
        </div>
      )
}

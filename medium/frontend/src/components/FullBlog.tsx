import { Appbar } from "./AppBar";
import { Avatar } from "./BlogCard";

interface MyComponentProps{
     title : string;
     content  : string;
     authorName : string;
}
export const FullBlog = ({title , content , authorName} : MyComponentProps) => {
        return(
         <div>
            <div><Appbar></Appbar></div>
            <div className = "grid grid-cols-12 w-full pt-16 px-16 gap-8" >
               <div className="col-start-1 col-span-9 ">
                  <div className="text-4xl font-bold">{title}</div>
                  <div className="text-slate-600 pt-2">Posted on 16th April 2024</div>
                  <div className="pt-4 text-lg max-w-full truncate"><div className="text-wrap">{content}</div></div>
               </div>
               <div className="col-span-3">
                  <div>
                      Author
                  </div>
                  <div className="flex mt-4 w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar authorName= {authorName || 'Anonymous'}></Avatar>
                        </div>
                        <div>      
                               <div className="text-xl font-bold ">{authorName}</div>
                               <div>Random catch phrase about author's ability to grab user's attention</div>
                       </div>
                  </div>
               </div>
        </div>
         </div>
)
}
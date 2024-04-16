import { Link } from "react-router-dom";


interface BlogCardProps{
     authorName : string;
     title : string;
     content : string;
     publishedDate : string;
     id : number
}
export const BlogCard = ({id ,authorName , title , content , publishedDate} : BlogCardProps) => {
    
      return (
         <>
           <Link to = {`/blog/${id}`}>
           <div className="border-b-2 max-w-3xl border-slate-200 pt-4 pb-8 cursor-pointer">
             <div className = "flex items-center gap-2">
             <div className="flex flex-col justify-center ">
                <Avatar authorName= {authorName}></Avatar>
             </div>
             <div className="text-center flex">
                   <div className = "font-normal pl-2">{authorName}</div>
                   <div className="flex flex-col justify-center pl-2"> <div className="w-1 h-1 rounded-full bg-slate-400"></div></div>
                   <div className="font-thin pl-2 text-slate-400">{publishedDate}</div>
             </div>
             </div>
             <div className="text-xl font-semibold">
                  {title}
             </div>
             <div className="font-thin text-md">
                {(content.length > 200) ?content.slice(0,200) + '...' : content};
             </div>
             <div className="text-slate-400 text-sm">
                 {`${Math.ceil(content.length/100)} minutes(s) read`}
             </div>
             {/* <div className="bg-slate-200 h-1 w-screen text-slate-400" >

             </div> */}
         </div>
           </Link>
         </>
      )
}

export function Avatar({authorName} : {authorName : string}){
     
  return(
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className ="text-gray-600 dark:text-gray-300">{`${authorName[0]}`}</span>
</div>

  )
}
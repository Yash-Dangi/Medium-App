import { Link } from "react-router-dom"
interface MyComponentProps{
      text : string,
      whereto : string
}
export const SignupCardTop = ({text,whereto} : MyComponentProps) => {
         return (
             <div className="flex flex-col items-center pt-32 px-6">
                      <div className="font-bold text-3xl"> Create an account</div>
                      <div className="flex gap-1 text-gray-500 font-normal text-md">
                           <div> {text}</div>
                           <div className="underline decoration-solid"> <Link to = {`/${whereto}`}> {(whereto == 'signup') ? 'SignUp' : "Login"}</Link></div>
                      </div>
             </div>
         )
}
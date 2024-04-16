import { InputComponenet } from "./InputComponent"

export const SupCard = () => {
     return(
         <div className="mt-8">
              <InputComponenet label={"Username"} placeholder= {"Enter your username"}></InputComponenet>
              <InputComponenet label = {"Email"} placeholder= {"m@example.com"}></InputComponenet>
              <InputComponenet label= {"Password"} placeholder=""></InputComponenet>
         </div>
     )
}
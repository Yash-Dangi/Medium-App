import { InputComponenet } from "./InputComponent"

export const SupCard = () => {
     return(
         <div className="mt-8">
              <InputComponenet onChange = {() => {}}label={"Username"} placeholder= {"Enter your username"}></InputComponenet>
              <InputComponenet onChange = {() => {}} label = {"Email"} placeholder= {"m@example.com"}></InputComponenet>
              <InputComponenet onChange = {() => {}} label= {"Password"} placeholder=""></InputComponenet>
         </div>
     )
}
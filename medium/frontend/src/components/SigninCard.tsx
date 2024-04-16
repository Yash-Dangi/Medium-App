import { Button } from "./Button"
import { SignupCardTop } from "./SignupCardTop"

import { ChangeEvent, useState } from "react";
import {SigninType} from '@yashd10/common-app/dist/index'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const SigninCard = () => {
      const [signinInputs , setSigninInputs] = useState<SigninType>({
          email : "",
          password : "",
      })
      const navigate = useNavigate();
      async function sendRequest() {
               try{
                     const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,signinInputs)
                     const jwt  = response.data.token;
                     localStorage.setItem('token' , jwt);
                     navigate('/blogs');
               }
               catch(e)
               {
                    alert('Enter Correct Credentials');
               }
      }
      return (
         <div className="flex justify-center">
              <div className="w-2/5">
                  <SignupCardTop text= {"Don't have an account?"} whereto = {'signup'}></SignupCardTop>
                  <div className="mt-8">
                  <InputComponenet label = {"Email"} placeholder= {"m@example.com"} onChange={(e) => {
                     setSigninInputs({
                        ...signinInputs,
                          email : e.target.value
                     });
                 }}></InputComponenet>
                 <InputComponenet label= {"Password"} placeholder="" onChange={(e) => {
                    setSigninInputs({
                        ...signinInputs,
                          password : e.target.value
                     });
                 }}></InputComponenet>
                  </div>
                  <Button label = {'Sign In'} onClick={sendRequest}> </Button>
              </div>
         </div>
      )
}



interface MyComponentProps {
    label: string;
    placeholder: string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => (void);
}
const InputComponenet= ({label , placeholder , onChange} : MyComponentProps) => {
     return(
        <div className="mb-4">
              <div className="mb-4 font-semibold text-base">{label}</div>
              <div className="w-full bg-red-900 h-10 border rounded-md border-2 border-gray-200"><input onChange = {onChange} className = "px-2 w-full h-full "type="text" placeholder= {placeholder}/></div>
        </div>
     )
}

import { SignupCardTop } from "./SignupCardTop"
import {useNavigate} from 'react-router-dom'
import { ChangeEvent, useState } from "react";
import {SignupType} from '@yashd10/common-app/dist/index'
import axios from 'axios'
import { BACKEND_URL } from "../config";
export const SignupCard = () => {
    const [signupInputs , setSignupInputs] = useState<SignupType>({
        email : "",
        password : "",
        name : ""
    });
     const navigate = useNavigate();
      async function sendRequest() {
               try{
                     const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,signupInputs)
                     const jwt  = response.data.token;
                     localStorage.setItem('token' , jwt);
                     navigate('/blogs');
               }
               catch(e)
               {
                    alert('Email Already Taken');
               }
      }
      
      return (
         <div className="flex justify-center">
              <div className="w-2/5">
                  <SignupCardTop text= {'Already have an account?'} whereto = {'signin'}></SignupCardTop>
                  <div className="mt-8">
                  <InputComponenet label={"Username"} placeholder= {"Enter your username"} onChange={(e) => {
                       setSignupInputs({
                          ...signupInputs,
                            name : e.target.value
                       });
                 }}></InputComponenet>
                 <InputComponenet label = {"Email"} placeholder= {"m@example.com"} onChange={(e) => {
                     setSignupInputs({
                        ...signupInputs,
                          email : e.target.value
                     });
                 }}></InputComponenet>
                 <InputComponenet label= {"Password"} placeholder="" onChange={(e) => {
                    setSignupInputs({
                        ...signupInputs,
                          password : e.target.value
                     });
                 }}></InputComponenet>
                  </div>
                  <div className="w-full">
                <button onClick = {sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
                </div>
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
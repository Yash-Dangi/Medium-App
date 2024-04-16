import { ChangeEvent } from "react";

interface MyComponentProps {
    label: string;
    placeholder: string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => (void);
}
export const InputComponenet= ({label , placeholder , onChange} : MyComponentProps) => {
     return(
        <div className="mb-4">
              <div className="mb-4 font-semibold text-base">{label}</div>
              <div className="w-full bg-red-900 h-10 border rounded-md border-2 border-gray-200"><input onChange = {onChange} className = "px-2 w-full h-full "type="text" placeholder= {placeholder}/></div>
        </div>
     )
}
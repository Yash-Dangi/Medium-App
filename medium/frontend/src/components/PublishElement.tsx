import { ChangeEvent, useState } from "react"
import { Appbar } from "./AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const PublishElement = () => {
      const [title ,setTitle]  = useState('');
      const [content ,setContent]  = useState('');
      const navigate = useNavigate();
      return(
        <div>
            <Appbar></Appbar>
            <div className="flex justify-center w-full">
            <div className="max-w-screen-lg w-full">
                <div className="w-full mt-24 mb-4"> <input onChange = {(e) => {
                     setTitle(e.target.value);
                }}type="text" className="focus:outline-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg foucs:ring-grey-500 foucs:border-grey-500 block w-full p-2.5"  placeholder="Title" required /></div>
                <div><TextEditor onChange={(e) => {
                    setContent(e.target.value);
                }}></TextEditor></div>
                <button onClick = {async () => {
                      const response  = await axios.post(`${BACKEND_URL}/api/v1/blog` , {
                           title,
                           content
                      }, {
                        headers : {
                             'authorization' : `Bearer ${localStorage.getItem('token')}`
                        }
                      });
                      navigate(`/blog/${response.data.id}`)
                    //   setTitle('');
                    //   setConTtnt('');
                }}type="submit" className="mt-4 inlin-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg foucs:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Publish Post</button>
            </div>
            </div>
        </div>
      )
}

function TextEditor({onChange} : {onChange : (e : ChangeEvent<HTMLTextAreaElement>) => (void)}) {
       return<div>
         <div className="w-full mb-4">
            <div className="flex items-center justify-between border">
                <div className = "py-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish Post</label>
                    <textarea onChange = {onChange} name="" id="editor"rows= {8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an blog..." required></textarea>
                </div>
            </div>
            
         </div>
       </div>
}
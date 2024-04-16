import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
       const [loading , setLoading] = useState(true);
       const [blogs , setBlogs] = useState([]);
       useEffect(() => {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers : {
                    'authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => {
                console.log(response.data.blog);
                setBlogs(response.data.post); 
                setLoading(false);
            })
       } , []);
       return {loading , blogs};
}

export const useBlog = (id : {id : string}) => {
        const [loading , setLoading] = useState(true);
        const [blog , setBlog] = useState({});
        console.log(id);
        useEffect(() => {
              axios.get(`${BACKEND_URL}/api/v1/blog/${id.id}`, {
                headers : {
                     'authorization' : `Bearer ${localStorage.getItem('token')}`
                }
              }).then(response => {
                   setLoading(false);
                   setBlog(response.data.post)
              })   
        }, []);
        return {loading , blog};
}
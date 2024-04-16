import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/blog'
import {Blogs}  from './pages/blogs'
import { PublishElement } from "./components/PublishElement"
// import {SingupType , SigninType , CreatePostType , UpdatePostType} from '@yashd10/common-app/dist/index'
function App() {
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/signup" element = {<SignUp/>}></Route>
          <Route path = "/signin" element = {<Signin/>}></Route>
          <Route path = "/blog/:id" element = {<Blog />}></Route>
          <Route path = "/blogs" element = {<Blogs/>}></Route>
          <Route path = 'publish' element = {<PublishElement />}></Route>
        </Routes>        
      </BrowserRouter>
    </>
  )
}

export default App

import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";


export const Appbar = () => {
     return(
        <div className="border-b flex justify-between items-center px-16 py-2">
                <div className="flex gap-4 items-center">
                    <Link to = "/blogs"><div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg"  width="50px" height="50px" viewBox="0 -55 256 256" version="1.1" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="#000000">

</path>
    </g>
</svg></div></Link>
                    <div className="font-semibold">Draft in Kirages</div>
                    <div className="font-normal text-slate-500">Saved</div>
                </div>
                <div className="flex items-center gap-4">
                <div className="w-full pt-2 pb-2 flex items-center">
                    <Link to = '/publish'>
                    <button  type="button" className="w-full h-full  text-white bg-slate-600 hover:bg-slate-800 focus:outline-none font-normal rounded-2xl text-sm px-2 py-1">+ New Blog</button>
                    </Link>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
                </div>
                    <div><Avatar authorName="Yash Dangi"></Avatar></div>
                </div>
        </div>
     )    
};
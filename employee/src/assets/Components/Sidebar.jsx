import React from "react";
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="h-svh w-52 bg-zinc-800 text-zinc-400 font-semibold"> 
       <li className='my-9 ml-2'>  <Link to='/employee'>Employee</Link></li>
       <li className='my-9 ml-2'><Link to='/project'>Project</Link></li>
       <li className='my-9 ml-2'> <Link to='/empprodet'>Employee-Projects</Link></li>
       <li className='my-9 ml-2'> <Link to='/task'>Tasks</Link></li>
         </div>
      
    )
}
export default Sidebar;
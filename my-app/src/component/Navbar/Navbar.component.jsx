import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./car.css";

const NavLg = () => {
   return (
   <>
   
   <div className="mx-1 flex w-full">  
  
   
   <div className="bg-blue-500 flex items-center justify-center ml-30 px-30 w-full h-24 py-6"> 
        <h1 className="text-white font-weight-600 text-3xl w-full py-2"><b>ECA<i>(Emerging Computer's Arena)</i></b></h1>
        <Link to="/"><button type="submit" className="text-white text-lg  pl-40 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<Link to="/aboutus"><button type="submit" className="text-white text-lg pl-10  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUTUS</button>
</Link>
       <Link to="/events"><button type="submit" className="text-white text-lg pl-10 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</Link>
<Link to="/register"><button type="submit" className="text-blue text-md bg-red-400  hover-text-white font-bold py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">Register</button>
</Link>
      </div>
    </div>
   </>
   );
  };


  const NavMd = () => {
    return (
     <>
     <div className="mx-1 w-full">  
       <div className="bg-blue-600 flex items-center justify-center gap-3 w-full h-20 py-4"> 
         <h1 className="text-white text-lg py-4 "><b>ECA<i>(Emerging Computer's Arena)</i></b></h1>
         <Link to="/"><button type="submit" className="text-white text-md  pl-20 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<Link to="/aboutus"><button type="submit" className="text-white text-md pl-4  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUTUS</button>
</Link>
       <Link to="/events"><button type="submit" className="text-white text-md pl-4 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</Link>
         <Link to="/register"><button type="submit" className="text-blue text-md bg-red-400 hover:bg-red-300 hover-text-white font-bold py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">Register</button>
</Link>
       </div>
     </div>
     </>
    );
   };

   const NavSm = () => {
    return (
      <>
      <div className="mx-1 w-full">  
        <div className="bg-blue-600 w-full py-4 flex items-center justify-center "> 
          <h1 className="text-white font-weight-900 text-2xl px-6"><b><i>ECA</i></b></h1>
          <Link to="/"><button type="submit" className="text-white text-sm  pl-2 hover:opacity-900 py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">HOME</button>
</Link>
<Link to="/aboutus"><button type="submit" className="text-white text-sm pl-2  hover-text-white  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">ABOUTUS</button>
</Link>
       <Link to="/events"><button type="submit" className="text-white text-sm pl-2 hover-text-red  py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">EVENTS</button>
</Link>
          <Link to="/register"><button type="submit" className="text-blue text-sm bg-red-400 hover:bg-red-300 hover-text-white font-bold py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded-xl">Register</button>
</Link>
        </div>
      </div>
      </>
     );
   };


   const Nav = ()=>{
    return(
        <nav>
          <div className="hidden lg:flex">
      <NavLg/>
          </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd/>
        </div>
        <div className="sm:flex md:hidden lg:hidden">
          <NavSm/>
          </div>
        </nav>
    );
}


  export default Nav;
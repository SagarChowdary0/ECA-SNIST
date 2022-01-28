import React from "react";
import logo  from "./logo.jpeg";
const AboutSm=()=>{
              return(
                  <>
                <div className="py-5">
                <div className="flex bg-gray-400 py-5">
                   
            <div className=" text-white">
                <h2 className="text-black px-5 text-xl font-bold">About Us...</h2>
                <p className="text-md mx-4">Envisioned with developing a hub for technical excellence particularly in the field of computer science and promoting competitive programming and coding as a culture in SNIST, Emerging Computer's Arena (ECA) club was founded on 21st January 2011 by few students. Our club embraces the motto, "Empowering talents with knowledge", 
                and provides a platform for the students of SNIST to garner expertise on various advancements in computational technology. 
                We have conducted several events like workshops, coding contests, quizzes, and many more to enhance the thought that
                 "Coding is the DNA of the Digital World". We have also organized guest-lectures to give the students an opportunity to
                  interact with Industry professionals and obtain career guidance.
                     </p>
            </div>
        </div>
        </div>
        </>
              );
        
};
const Aboutmd=()=>{
        return(
            <>              
        <div className="py-5">
            <div className=" flex bg-gray-400 py-5">
                
        <div className="text-white">
            <h2 className=" py-10 mx-20 text-black text-4xl font-bold">About Us...</h2>
            <p className="text-lg mx-10">Envisioned with developing a hub for technical excellence particularly in the field of computer science and promoting competitive programming and coding as a culture in SNIST, Emerging Computer's Arena (ECA) club was founded on 21st January 2011 by few students. Our club embraces the motto, "Empowering talents with knowledge", 
            and provides a platform for the students of SNIST to garner expertise on various advancements in computational technology. 
            We have conducted several events like workshops, coding contests, quizzes, and many more to enhance the thought that
             "Coding is the DNA of the Digital World". We have also organized guest-lectures to give the students an opportunity to
              interact with Industry professionals and obtain career guidance.
                 </p>
        </div>
    </div>
</div>
            </>
        );
};
const AboutLg=()=>{
  return(
      <>
        <div className="py-5">
            <div className="flex bg-gray-400 py-20 px-40">
              <div className=" w-1/2 h-96 mx-25  py-30 px-35">
              <img src={logo} alt="logo"
          className="rounded-xl w-full h-full"
          />
        </div>
             <div className=" text-white w-full pl-20 py-4 ">
                    <h2 className="text-black text-5xl py-2  font-bold">About Us...</h2>
                 <p className="text-xl py-30">"Envisioned with developing a hub for technical excellence particularly in the field of computer science
                  and promoting competitive programming and coding as a culture in SNIST, Emerging Computer's Arena (ECA)
                  club was founded on 21st January 2011 by few students. Our club embraces the motto, "Empowering talents with knowledge", 
                     and provides a platform for the students of SNIST to garner expertise on various advancements in computational technology. 
                     We have conducted several events like workshops, coding contests, quizzes, and many more to enhance the thought that
                    "Coding is the DNA of the Digital World". We have also organized guest-lectures to give the students an opportunity to
                    interact with Industry professionals and obtain career guidance."
                </p>
            </div>
     </div>
</div>
      </>
  );
};
const Aboutus = ()=>{
    return(
        <footer>
          <div className="hidden lg:flex">
      <AboutLg/>
          </div>
        <div className="hidden md:flex lg:hidden">
          <Aboutmd/>
        </div>
        <div className="sm:flex md:hidden lg:hidden">
          <AboutSm/>
          </div>
        </footer>
    );
}


export default Aboutus;


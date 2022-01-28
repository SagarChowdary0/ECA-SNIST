import React from "react";

const Events= ()=>{
    return(
        <>
        
        <div className="flex items-center bg-indigo-100 w-screen min-h-screen">
          
  <div className="container ml-auto mr-auto flex flex-wrap items-start">
  <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 className="text-3xl lg:text-5xl px-5 py-10 text-gray-900 font-extrabold">
        Our Events...
      </h1>
    </div>
   
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
       <p className="text-gray-800">GOOGLE HASH CODE 2020: Hash code is a coding event conducted by Google every year all over the world and Google allows colleges to set up hubs during the event to bring all the coders under one roof and make coding much more competitive and fun. SNIST-ECA has been selected as a hub for the year 2020 and we are proud to say that the event has seen a massive turnover from students not only from SNIST but other colleges as well.</p>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            GOOGLE HASH CODE 2020
            </h5>
            <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>

          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
       <p className="text-gray-800">Cross Platform Application Development using Flutter (19/8/19 to 23/8/19): The Flutter session saw a huge turnout of students even all three sessions, approximately adding up to a count of 80 students. We taught the introduction about IDE and guided them in installing Flutter, JDK, various tools associated this IDE. We taught the installed tools usage and the importance played by each tool. We taught them to create the UI of a basic ticket booking app which involves buttons, images, progress dialog, text view, etc.</p>
        <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            Cross Platform Application Development using Flutter (19/8/19 to 23/8/19)
            </h5>
              <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
          </div>
        </div>
      </div>
    </div>    
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
       <p className="text-gray-800">
          FULL STACK WEB DEVELOPMENT (INDUCTION PROGRAM): We taught how to design responsive webpages using HTML and CSS. We taught them about Bootstrap and JavaScript to build a webpage with good styling.</p>
        <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              FULL STACK WEB DEVELOPMENT (INDUCTION PROGRAM)
            </h5>
              <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <p className="text-gray-800 text-xl">Roadmap To Competitive Programming: We taught the attendees the importance of competitive coding, provided guidance on how to proceed in it. We gave them sources to start practicing and taught a few important algorithms.</p>
        <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            Roadmap To Competitive Programming
            </h5>
            <span className="text-xs text-gray-400 leading-none">Brilliant. In every way. </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default Events;
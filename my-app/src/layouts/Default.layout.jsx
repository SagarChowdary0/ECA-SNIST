import React from "react";

import Aboutus from "../component/AboutUs/aboutus.component"
import Nav from "../component/Navbar/Navbar.component";

import Footer from "../component/footer/footer.component";

import Events from "../component/Events/events.component";
import Details from "../component/Details/details.component";
import SimpleSlider from "../component/Hero.carousel/HeroCaraousal";
const DefaultLayout = (props)=>{
    return(
        <>
            <Nav/>
            <div className="justify-center">
        <SimpleSlider/>
       </div>
      <Aboutus/>
      <Details/>
      <Events />
      <Footer />
            {props.children}
        </>
    );
};

export default DefaultLayout;

import React from "react";

import Aboutus from "../component/AboutUs/aboutus.component"
import Nav from "../component/Navbar/Navbar.component";
import Footer from "../component/footer/footer.component";
import Details from "../component/Details/details.component";
const AboutUsLayout = (props)=>{
    return(
        <>
            <Nav/>
            <Aboutus/>
            <Details/>
            <Footer />
            {props.children}
        </>
    );
};

export default AboutUsLayout;

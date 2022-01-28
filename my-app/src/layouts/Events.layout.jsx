import React from "react";

import Nav from "../component/Navbar/Navbar.component";

import Footer from "../component/footer/footer.component";
import Events from "../component/Events/events.component";
const Eventslayout = (props)=>{
    return(
        <>
            <Nav/>
            <Events/>
            <Footer />
           
        </>
    );
};

export default Eventslayout;

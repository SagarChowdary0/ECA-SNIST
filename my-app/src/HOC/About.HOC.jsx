import React from "react";
import {Route} from "react-router-dom";
import AboutUsLayout from "../layouts/AboutUs.layout";
const AboutUsHOC = ({component:Component,...rest})=>{
    return(
        <>
        <Route 
        {...rest}
        component={(props)=>(
            <AboutUsLayout>
                <Component {...props}/>
            </AboutUsLayout>
        )}
        />
        </>
    );
};


export default AboutUsHOC;
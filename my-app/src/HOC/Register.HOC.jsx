import React from "react";
import {Route} from "react-router-dom";
import RegisterLayout from "../layouts/Register.layout";
const RegisterHOC = ({component:Component,...rest})=>{
    return(
        <>
        <Route 
        {...rest}
        component={(props)=>(
            <RegisterLayout>
                <Component {...props}/>
            </RegisterLayout>
        )}
        />
        </>
    );
};


export default RegisterHOC;
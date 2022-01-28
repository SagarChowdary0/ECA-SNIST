import React from "react";


import Footer from "../component/footer/footer.component";
import Register from "../component/Register.component.jsx/register";
const RegisterLayout = (props)=>{
    return(
        <>
            <Register/>
            <Footer/>
            {props.children}
        </>
    );
};

export default RegisterLayout;

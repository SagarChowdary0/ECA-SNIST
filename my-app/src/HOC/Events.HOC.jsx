import React from "react";
import {Route} from "react-router-dom";
import Eventslayout from "../layouts/Events.layout";
const EventsHOC = ({component:Component,...rest})=>{
    return(
        <>
        <Route 
        {...rest}
        component={(props)=>(
            <Eventslayout>
                <Component {...props}/>
            </Eventslayout>
        )}
        />
        </>
    );
};


export default EventsHOC;
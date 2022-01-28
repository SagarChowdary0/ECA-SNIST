import React,{Component} from "react";
import {Route } from "react-router-dom";
import Events from "./component/Events/events.component";
import AboutUsHOC from "./HOC/About.HOC";
import DefaultHOC from "./HOC/Default.HOC";
import RegisterHOC from "./HOC/Register.HOC";
import AboutUs from "./pages/AboutUs.page";
import HomePage from "./pages/Home.page";
import Register from "./pages/register.page";
import EventsHOC from "./HOC/Events.HOC"
class App  extends Component{
    render(){
      return(
            <Route>
              <DefaultHOC  exact path='/' component={HomePage}/>
              <AboutUsHOC  exact path='/aboutus' component={AboutUs}/>
              <RegisterHOC  exact path='/register' component={Register}/>
              <EventsHOC  exact path='/events' component={Events}/>

            </Route>
          );
  }
}
export default App;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./components/Jumbotron/Jumbotron";
import Register from "./components/register/register.js";
import LogBtn from "./components/Buttons/btns.js";





function Main() {
    return(
        <div className="container">
            <Router>
            </Router>
            <Route/>
            <Switch>
            </Switch>
            <Welcome/>
            <LogBtn/>
            

            
            <Register/>

        </div>


    )}
export default Main;
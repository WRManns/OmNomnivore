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
<<<<<<< HEAD
            <Switch/>
=======
            <Switch>
            </Switch>
            <Welcome/>
            <LogBtn/>
            

            
>>>>>>> 693e25f8ed1938c1552aec831dd3da47c3894d19
            <Register/>

        </div>


    )}
export default Main;
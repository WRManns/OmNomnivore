import React from "react";
import Intro from "../components/Intoduction/Welcome.js"
import RegisterForm from "../components/register/RegisterForm.js"
import SignIn from "../components/Forms/signin.js"





function Main() {
    return(
        <div className="container">

            
            <Intro/>
            <div class="container row d-flex inline justify-content-md-center">
            <SignIn/>
            <RegisterForm/>
            </div>
            
            


        </div>


    )}
export default Main;
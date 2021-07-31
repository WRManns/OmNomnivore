import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavXample from "./components/Navbar/index";
import SearchForm from "./components/SearchForm/SearchForm";
import Example from "./components/Card/Card"
import LogBtn from "./components/Buttons/btns.js";
import Wrapper from "./components/Wrapper/index";
import Welcome from "./components/Jumbotron/Jumbotron";
import SignIn from "./components/Forms/signin.js";
import Register from "./components/register/register.js"
import Intro from "./components/Intoduction/Welcome.js"
import "./App.css";


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
      <Welcome />
      <NavXample />
        <Wrapper>
        <SearchForm />
          {/* <Example>
          </Example> */}
          <SignIn>
          </SignIn>
          <Register/>
          <LogBtn />
          <Intro/>
        </Wrapper>
    </div>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavXample from "./components/Navbar/index";
import SearchForm from "./components/SearchForm/SearchForm"
import Example from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index";
import Welcome from "./components/Jumbotron/Jumbotron";
import LogBtn from "./components/Loginbtn/btns.js";
import "./App.css";


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
      <LogBtn />
      <Welcome />
      <NavXample />
        <Wrapper>
        <SearchForm />
          <Example>
          </Example>
          
        </Wrapper>
    </div>
  );
}

export default App;

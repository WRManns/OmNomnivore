import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavXample from "./components/Navbar/Navbar";
import Search from "./components/SearchBar/SearchBar";
import Example from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index";
import Login from "./pages/mainpage.js";
import LogIn from './components/Loginbtn/btns.js'
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavXample />
      <Router>
        <Switch>
          <Route exact path="/mainpage" component = {Login} />
        </Switch>
      </Router>
        <Wrapper>
        <Search placeholder="Enter Search..."/>
          <Example>
          </Example>
        </Wrapper>
    </div>
  );
}

export default App;

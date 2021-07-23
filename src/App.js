import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavXample from "./components/Navbar/Navbar";
import Search from "./components/SearchBar/SearchBar";
import Example from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/login" component = {Login} />
        </Switch>
      </Router>
      
      <NavXample />
        <Wrapper>
        <Search placeholder="Enter Search..."/>
          <Example>
          </Example>
        </Wrapper>
    </div>
  );
}

export default App;

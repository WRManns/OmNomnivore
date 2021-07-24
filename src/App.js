import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavXample from "./components/Navbar/index";
import Search from "./components/SearchBar/SearchBar";
// import SearchBar from './components/SearchBar/search';
import Example from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index";
import Welcome from "./components/Jumbotron/Jumbotron";
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
        <Search placeholder="Enter Search..." />
          <Example>
          </Example>
          
        </Wrapper>
    </div>
  );
}

export default App;

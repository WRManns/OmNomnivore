import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/main.js"
import Home from "./pages/home.js"
import Menu from "./pages/menu.js"
import "./App.css";


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route  path="/" component={Main} exact/>
          <Route  path="/home" component={Home} exact/>
          <Route  path="/menu" component={Menu} exact/>
        </Switch>
      </Router>
      
      
        
    </div>
  );
}

export default App;
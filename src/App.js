import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./pages/main.js"
import Home from "./pages/home.js"
import "./App.css";


function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route  path="/main" component={Main} exact/>
          <Route  path="/home" component={Home} exact/>
        </Switch>
      </Router>
      
      
        
    </div>
  );
}

export default App;

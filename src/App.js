import React from "react";
import NavXample from "./components/Navbar/Navbar";
import Example from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavXample />
        <Wrapper>
          <Example>
          </Example>
        </Wrapper>
    </div>
  );
}

export default App;

import React from "react";
import NavXample from "../components/Navbar/index";
import SearchForm from "../components/SearchForm/SearchForm";
import Example from "../components/Card/Card"
import Wrapper from "../components/Wrapper/index";







function Home(){
return(
    <div className="container">
    <NavXample />
    <Wrapper>
    <SearchForm />
      {/* <Example>
      </Example> */}
    </Wrapper> 

    </div>

)}
export default Home
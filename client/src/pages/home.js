import React from "react";
import NavXample from "../components/Navbar/index";
import SearchForm from "../components/SearchForm/SearchForm";
import Wrapper from "../components/Wrapper/index";

function Home(){
return(
    <div className="container">
    <NavXample />
    <Wrapper>
      <SearchForm />
    </Wrapper> 

    </div>

)}
export default Home
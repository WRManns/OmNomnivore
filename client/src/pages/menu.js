import React from "react";
import NavXample from "../components/Navbar/index";
import MenuCard from "../components/Card/MenuCard"
import Wrapper from "../components/Wrapper/index";







function Menu(){
return(
    <div className="container">
    <NavXample />
    <Wrapper>
    <MenuCard />
    </Wrapper> 

    </div>

)}
export default Menu
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import API from '../../utils/API';
import './style.css';

const NavXample = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let history = useHistory();

  const toggle = () => setIsOpen(!isOpen);
  const handleClick = () => {
    API.logout().then(res => {
      console.log(res)
      if (res.status === 404) {
        history.push("/main")
      }
    })
  }

  return (
    <div>
      <Navbar >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Saved Recipes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Saved Restaurants</NavLink>
            </NavItem>
          </Nav>
          <NavbarText onClick={handleClick}>Login/Logout
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavXample;
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Button,
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
  // const handleClick = () => {
  //   API.logout().then(res => {
  //     console.log(res)
  //     if (res.status === 404) {
  //       history.push("/main")
  //     }
  //   })
  // }

  return (
    <div>
      <Navbar >
        <NavbarToggler onClick={toggle} />
  
            <NavItem>
                    <Button>
                      <Link to={{ pathname: "/", state: props.query }} style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
                    </Button>
              {/* <Button onClick={handleClick}variant="secondary" size="sm">Logout</Button> */}
            </NavItem>
          
          <NavbarText >
          </NavbarText>
      </Navbar>
    </div>
  );
}

export default NavXample;
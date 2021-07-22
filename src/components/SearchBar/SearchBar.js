import React, { useState } from 'react';
import {
  InputGroup,
  Input,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const Search = ({placeholder, data}) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="search">
      <InputGroup>
        <Input className="searchField" type="text" placeholder={placeholder} />
        <Button className="searchBtn" type="submit">SEARCH</Button>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
          Whatcha Wanna Search By?
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className="restaurantToggle">By Restaurant</DropdownItem>
            <DropdownItem className="recipeToggle">By Recipe</DropdownItem> 
          </DropdownMenu>
        </ButtonDropdown>
      </InputGroup>
    </div>
  );
}


export default Search;
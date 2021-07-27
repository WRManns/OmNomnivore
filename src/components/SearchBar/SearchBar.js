import React, { useState } from 'react';
import {
  InputGroup,
  Input,
  // Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import './SearchBar.css';
 //import SearchIcon from '@material-ui/icons/Search';
 //import CloseIcon from "@material-ui/icons/Close";


const Search = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    
      <InputGroup>
        <div >
            <Input className="searchInput" 
            type="text" 
            placeholder={placeholder} 
            value={wordEntered}
            onChange={handleFilter}
            />
        </div>
      
          </div>       
          {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
          </div>
            )}


            <ButtonDropdown className="searchToggler" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Search Toggle
                </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem className="restaurantToggle">By Restaurant</DropdownItem>
                        <DropdownItem className="recipeToggle">By Recipe</DropdownItem> 
                    </DropdownMenu>
            </ButtonDropdown>
     </InputGroup> 
        
  );
}


export default Search;
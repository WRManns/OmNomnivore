import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'
import { data } from '../APITester';
import $ from 'jquery';
import axios from 'axios'
import Example from "../Card/Card"


export default function SearchForm() {
  // const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState('');
  const [rest, setRest] = useState('Taco%20Bell');
  const [restaurants, setRestaurants] = useState([])
  //set state to empty value or something


  const handleSearchChange = (event) => {
    setQuery(event.target.value);

  }

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let test = $('#search_input').val();
    setRest(test)
    console.log(test)
    
    //change state to have search value
  }

  const getRestaurant = () => {
    console.log(rest)

    const testURL = 'https://api.documenu.com/v2/restaurants/search/fields?restaurant_name=' + rest +  '&exact=true&size=10&key=8dd1d7be3d5e5a366a97dab169328b07'

    axios.get(testURL).then((res) => {
      console.log(testURL)
      console.log(res.data.data)
      setRestaurants(res.data.data)
    })
  }


  return (
    <div>
    <Form onSubmit={e => handleSubmit(e)} >
      <FormGroup>
        <Input
          className="w-25"
          id='search_input'
          placeholder="enter search"
          type="text"
          value={query}
          onChange={handleSearchChange} />
      </FormGroup>
      <FormGroup className="radioField" tag="fieldset" value={radio} onChange={handleRadioChange}>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              value="recipe"
              name="radio1"
              id="recipe-radio"
              className="radio"
            />Search by Recipe
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              value="restaurant"
              name="radio1"
              id="restaurant-radio"
              className="radio"
            />Search by Restaurant
          </Label>
        </FormGroup>
      </FormGroup>
      <Button
        type='submit'
        name='search-btn'
        id='search-btn'
        className='searchbtn'
      >
        Search
      </Button>
    </Form>
    <Example getRestaurant={getRestaurant}
    restaurants={restaurants}/>
    </div>
  );

}


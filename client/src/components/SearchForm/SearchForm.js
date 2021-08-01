import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'
import { data } from '../APITester';
import $ from 'jquery';
import axios from 'axios'
import Recipes from "../Card/Card"


export default function SearchForm() {
  // const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState('');
  const [rest, setRest] = useState('Panera');
  const [restaurants, setRestaurants] = useState([])
  //set state to empty value or something


  const handleSearchChange = (event) => {
    // let test = $('#search-input').val();
    setQuery(event.target.value);
    setRest(event.target.value);

  }

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    setRest(event.target.value)

    
    //change state to have search value
  }

  const getRestaurant = (event) => {
    event.preventDefault()
    console.log(rest)

    const testURL = 'https://api.documenu.com/v2/restaurants/search/fields?restaurant_name=' +rest + '&exact=true&size=10&key=55fb253bdfe336b05d390014b8d54a58'

    axios.get(testURL).then((res) => {
      console.log(testURL)
      console.log(res.data.data)
      setRestaurants(res.data.data)
      console.log(restaurants)
    })
  }


  return (
    <div>
    <Form onSubmit={e=>handleSubmit(e), e=> getRestaurant(e) } >
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
      <Button onSubmit = {e=>handleSubmit(e)}
        type='submit'
        name='search-btn'
        id='search-btn'
        className='searchbtn'
      >
        Search
      </Button>
    </Form>
    <Recipes getRestaurant={getRestaurant}
    restaurants={restaurants}/>
    </div>
  );

}


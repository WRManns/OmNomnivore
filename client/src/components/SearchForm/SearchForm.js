import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'
import $ from 'jquery';
import axios from 'axios'
import Restaurant from "../Card/Card"
import Recipes from "../Card/Card"
import MenuItems from '../Card/MenuCard';

const Documenu = require('documenu')
Documenu.configure('55fb253bdfe336b05d390014b8d54a58')

export default function SearchForm() {

  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState('');
  const [rest, setRest] = useState('');
  const [resto, setResto] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [recipe, setRecipes] = useState('');
  const [recipeID, setRecipeID] = useState('');
  const [recipeItems, setRecipeItems] = useState([]);
  const [menuSections, setMenuSections] = useState([]);
  const [menuItems, setMenuItems] = useState([]);




  const handleSearchChange = (event) => {

    setQuery(event.target.value);

    if (radio == "restaurant") {
      setRest(event.target.value)
    } else {
      setRecipes(event.target.value)
    }
  }

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    console.log(radio)
  }

  const getRestaurant = (event) => {
    event.preventDefault()
    console.log(rest, menuItems)

    if (radio == "restaurant") {
      const params = {
        "size": 1,
        "page": 1,
        "fullmenu": true
      };

      Documenu.Restaurants.getByZipCode(query, params)
        .then(res => {
          const rest_name_array = []
          const menu_array = []
          for (let i = 0; i < 10; i++) {
            rest_name_array.push(res.data[i]);
            for (let j = 0; j < res.data[i].menus.length; j++) {
              for (let k = 0; k < res.data[i].menus[j].menu_sections.length; k++) {
                menu_array.push(res.data[i].menus[j].menu_sections[k].menu_items)
              }
            }

          }
          setRestaurants(rest_name_array)
          setMenuItems(menu_array)
        })

    } else {
      console.log(recipe)
      console.log(radio)

      const recipeURL = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
        params: {
          query: recipe,

        },
        headers: {
          'x-rapidapi-key': '83880f65f7mshad8dbb70fd491d8p1aad41jsn9100b230787d',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      axios.request(recipeURL).then(function (res) {
        console.log(recipeURL)
        console.log(res.data.results)
        const recipe_array = []
        for (let i = 0; i < 10; i++) {
          recipe_array.push(res.data.results[i]);

        }
        setRecipeItems(recipe_array)
      }).catch(function (error) {
        console.error(error);
      });
    }
  }


  return (
    <div>
      <Form onSubmit={e => getRestaurant(e)} >
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
                value='recipe'
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
              />Search Restaurants by ZipCode
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
      <Restaurant
        getRestaurant={getRestaurant}
        restaurants={restaurants}
        recipeItems={recipeItems}
        query={query}
        radio={radio}
      />

    </div>
  );
}


// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import './SearchForm.css'
// import $ from 'jquery';
// import axios from 'axios'
// import Recipes from "../Card/Card"


// export default function SearchForm() {

//   const [query, setQuery] = useState('');
//   const [radio, setRadio] = useState('');
//   const [rest, setRest] = useState('');
//   const [restaurants, setRestaurants] = useState([]);
//   const [recipe, setRecipes] = useState('');
//   const [recipesObj, setRecipeObj] = useState([]);



//   const handleSearchChange = (event) => {

//     setQuery(event.target.value);

//     // if (radio.value == "restaurant") {
//       setRest(event.target.value)
//     // } else {
//     //   setRecipes(event.target.value)
//     // }

//   }

//   const handleRadioChange = (event) => {
//     setRadio(event.target.value);
//     console.log(radio)
//   }

//   const getRestaurant = (event) => {
//     event.preventDefault()
//     // if (radio.value == "restaurant") {
//       console.log(rest)
//       console.log(radio)
//       const restaurantURL = 'https://api.documenu.com/v2/restaurants/zip_code/' + rest + '?size=10&key=55fb253bdfe336b05d390014b8d54a58'

//       axios.get(restaurantURL).then((res) => {
//         console.log(restaurantURL)
//         console.log(res.data.data)
//         setRestaurants(res.data.data)
//         console.log(restaurants)
//       });

//     // } else {

//     //   console.log(recipe)
//     //   console.log(radio)

//     //   const recipeURL = {
//     //     method: 'GET',
//     //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
//     //     params: {
//     //       query: recipe,

//     //     },
//     //     headers: {
//     //       'x-rapidapi-key': '83880f65f7mshad8dbb70fd491d8p1aad41jsn9100b230787d',
//     //       'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     //     }
//     //   };

//     //   axios.request(recipeURL).then(function (res) {
//     //     console.log(recipeURL)
//     //     console.log(res.data.results)
//     //     setRecipeObj(res.data.results)
//     //   }).catch(function (error) {
//     //     console.error(error);
//     //   });
//     // }
//   }


//   return (
//     <div>
//       <Form onSubmit={e => getRestaurant(e)} >
//         <FormGroup>
//           <Input
//             className="w-25"
//             id='search_input'
//             placeholder="enter search"
//             type="text"
//             value={query}
//             onChange={handleSearchChange} />
//         </FormGroup>
//         <FormGroup className="radioField" tag="fieldset" value={radio} onChange={handleRadioChange}>
//           <FormGroup check>
//             <Label check>
//               <Input
//                 type="radio"
//                 value="recipe"
//                 name="radio1"
//                 id="recipe-radio"
//                 className="radio"
//               />Search by Recipe
//             </Label>
//           </FormGroup>
//           <FormGroup check>
//             <Label check>
//               <Input
//                 type="radio"
//                 value="restaurant"
//                 name="radio1"
//                 id="restaurant-radio"
//                 className="radio"
//               />Search by Restaurant
//             </Label>
//           </FormGroup>
//         </FormGroup>
//         <Button
//           type='submit'
//           name='search-btn'
//           id='search-btn'
//           className='searchbtn'
//         >
//           Search
//         </Button>
//       </Form>
//       <Recipes
//         getRestaurant={getRestaurant}
//         restaurants={restaurants}
//         // recipesOjb={recipesObj}
//         radio={radio}
//       />
//     </div>
//   );
  
// }

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'
import $ from 'jquery';
import axios from 'axios'
import Recipes from "../Card/Card"

const Documenu = require('documenu')
Documenu.configure('55fb253bdfe336b05d390014b8d54a58')

export default function SearchForm() {

  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState('');
  const [rest, setRest] = useState('');
  const [resto, setResto] =useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [recipeID, setRecipeID] = useState('');
  const [recipesObj, setRecipeObj] = useState([]);
  const [menuSections, setMenuSections] = useState([]);
  const [menuItems, setMenuItems] = useState([]);


 

  const handleSearchChange = (event) => {

    setQuery(event.target.value);

    // if (radio.value == "restaurant") {
      setRest(event.target.value)
    // } else {
    //   setRecipes(event.target.value)
    // }
  }

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    console.log(radio)
  }

  const getRestaurant = (event) => {
    event.preventDefault()
    console.log(rest, menuItems)

    const params = {
      "size":1,
      "page":1,
      "fullmenu": true
    };
  
     Documenu.Restaurants.getByZipCode(query, params)
    .then(res=> { setRestaurants(res.data)})};
    console.log(restaurants)
  //   .then(res=> {
  //       setRest(res.data)
  //       setRestaurants(res.data[1].restaurant_name)
  //       setMenuItems(res.data[0].menus[0].menu_sections[0].menu_items)
  //       // console.log(resto)
  //       // console.log(restaurants)
  //       // console.log(menuItems)
  //     //  })
  // })
  //    .then(function(){
  //     for(let i = 0; i < menuItems.length; i++ ){
  //       console.log(menuItems[i].name)}})}
    // Documenu.Restaurants.getByZipCode(query,params)
    // .then(res=> {
    //   setRest(res.data[0].restaurant_name)
    //   setRestaurants(res.data[1].restaurant_name)
    //   setMenuItems(res.data[0].menus[0].menu_sections[0].menu_items)
    //  })
    //.then(function(){
    //   for(let i = 0; i < menuItems.length; i++ ){
    //     console.log(menuItems[i].name)
  //  let spoonacularURL = 'https://api.spoonacular.com/recipes/autocomplete?number=5&query=' + menuItems[i].name + '&apiKey=a2d495a4dfbf4e9fb494d80589c30e68'
  //       axios.get(spoonacularURL).then(res =>{
  //         setRecipeID(res.data[0].id)
        // })
    //   }
    // // }).then(function(){
    // //   let spoonacularURL2 = "https://api.spoonacular.com/recipes/" + recipeID + '/similar?number=1&apiKey=a2d495a4dfbf4e9fb494d80589c30e68'
    // //   axios.get(spoonacularURL2).then(res => {
    // //     setRecipeURL(res.data[0].sourceURL)
    // //   })
    // });
    // if (radio.value == "restaurant") {
     /*  console.log(rest)
      console.log(radio)
      const restaurantURL = 'https://api.documenu.com/v2/restaurants/search/fields?restaurant_name=' + rest + '&exact=true&size=10&key=55fb253bdfe336b05d390014b8d54a58'

      axios.get(restaurantURL).then((res) => {
        console.log(restaurantURL)
        console.log(res.data.data)
        setRestaurants(res.data.data)
        console.log(restaurants)
      }); */

    // } else {

    //   console.log(recipe)
    //   console.log(radio)

    //   const recipeURL = {
    //     method: 'GET',
    //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    //     params: {
    //       query: recipe,

    //     },
    //     headers: {
    //       'x-rapidapi-key': '83880f65f7mshad8dbb70fd491d8p1aad41jsn9100b230787d',
    //       'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    //     }
    //   };

    //   axios.request(recipeURL).then(function (res) {
    //     console.log(recipeURL)
    //     console.log(res.data.results)
    //     setRecipeObj(res.data.results)
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // }




  // }


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
      <Recipes
        getRestaurant={getRestaurant}
        restaurants={restaurants}
        // recipesOjb={recipesObj}
        //radio={radio}
      />
    </div>
  );
  
}


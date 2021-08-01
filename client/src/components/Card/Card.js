import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
// import "./style.css";
/* import AutoCompleteRecipe from './recipeAutoAPI'
import SearchSimilarFoods from './recipeSearchAPI' */
import getFoodNearYou from  './documenu'
import {List, ListItem} from "../List"
// import {restaurants} from "../SearchForm"


/* function Recipes() {
  const [test, setTests] = useState([])
  const [formObject, setFormObject] = useState({})
  useEffect(() => {
    getRecipe();
  }, [])
  useEffect(() => {
    loadRecipe();
  }, [loadRecipe])

  function getRecipe() {
    AutoCompleteRecipe('chick')
    .then(res => 
      setTests(res.data)
      )
      .catch(err => console.log(err))
  }
  console.log(test)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function loadRecipe(){
  for(let i =0; i < 5; i++){
      SearchSimilarFoods(test[i].id)
      .then(res =>
        setFormObject(res.data)
        )
        .catch(err => console.log(err));
    } 
  }
 */


  function Recipes(props) {

    
    // }, []);  console.log(props.getRestaurant(), props.restaurants)

    // function getRecipe() {
    //   getFoodNearYou()
    //   .then(res => 
    //     setTests(res.data.data)
    //     )
    //     .catch(err => console.log(err))
    // }
    // console.log(test)


  return (
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
          {props.restaurants.length ? (
              <List>
                {props.restaurants.map(test => {
                  return (
                    <ListItem key= {test.restaurant_id}>
                    <p>
                      <a href={test.restaurant_website}>
                      {test.restaurant_name}                          
                      </a> 
                      
                    </p>
                    <p> {test.restaurant_phone}  </p>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} 
          
          </CardText>
        </CardBody>
      </Card>
    
  );
            
};

export default Recipes;
import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import "./style.css";
import AutoCompleteRecipe from './recipeAutoAPI'
import SearchSimilarFoods from './recipeSearchAPI'
import {List, ListItem} from "../List"

function Recipes() {
  const [test, setTests] = useState([])
  const [formObject, setFormObject] = useState({})
  useEffect(() => {
    getRecipe();
  }, [])
  useEffect(() => {
    loadRecipe();
  }, [])

  function getRecipe() {
    AutoCompleteRecipe('chick')
    .then(res => 
      setTests(res.data)
      )
      .catch(err => console.log(err))
  }
  console.log(test)

  function loadRecipe(){
  for(let i =0; i < test.length; i++){
      SearchSimilarFoods(test[i].id)
      .then(res =>
        setFormObject(res.data)
        )
        .catch(err => console.log(err));
    } 
  }

  return (
    
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
          {formObject.length ? (
              <List>
                {formObject.map(formObject => {
                  return (
                    <ListItem key= {formObject.id}>
                    <p>
                      <a href={formObject.sourceUrl}>
                      {formObject.title}                          
                      </a> 
                    </p>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
  );

};

export default Recipes;
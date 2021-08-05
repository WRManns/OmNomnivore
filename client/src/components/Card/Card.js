import React, { useEffect, useState } from "react";
import MenuItems from "./MenuCard";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import { List, ListItem } from "../List/index"
import { Link } from "react-router-dom";



const Restaurant = (props) => {
  
  if (props.radio == "recipe") {

    return (
      <Card>
        <CardBody>

          {props.recipeItems ? (
            <List>
              {props.recipeItems.map(test => {
                console.log(test)
                return (

                  <ListItem key={test.id}>

                    <p>
                      <a href={test.sourceUrl}>
                        {test.title}
                      </a>
                    </p>

                    <Button>
                      <Link to={{ pathname: "/menu", state: props.query }} style={{ textDecoration: 'none', color: 'white' }}>Save Recipe</Link>
                    </Button>

                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}

        </CardBody>
      </Card>

    );
  } else {
    return (
      <Card>
        <CardBody>

          {props.restaurants.length ? (
            <List>
              {props.restaurants.map(test => {
                console.log(test)
                return (

                  <ListItem key={test.restaurant_id}>
                    <p>
                      <a href={test.restaurant_website}>
                        {test.restaurant_name}
                      </a>
                    </p>
                    <p> {test.restaurant_phone} </p>

                    <Button>
                      <Link to={{ pathname: "/menu", state: props.query }} style={{ textDecoration: 'none', color: 'white' }}>Menu</Link>
                    </Button>

                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}


        </CardBody>
      </Card>

    );
  }


}

export default Restaurant;


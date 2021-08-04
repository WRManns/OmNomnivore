import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import {List, ListItem} from "../List"


  function MenuItems(props) {
  
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
                  console.log(test)
                  return (
                    
                  <ListItem key= {test.restaurant_id}>
                    <p>
                      <a href={test.restaurant_website}>
                      {test.restaurant_name}                          
                      </a> 
                    </p>
                    <p> {test.restaurant_phone} </p>
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
}

export default MenuItems;
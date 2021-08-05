import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
// import "./style.css";
/* import AutoCompleteRecipe from './recipeAutoAPI'
import SearchSimilarFoods from './recipeSearchAPI' */
import {List, ListItem} from "../List/index"
import { Link } from "react-router-dom";

const MenuList = (props) => {
  useEffect(() => {
    console.log(props.menuItems)
  }, [])

  return (
      <Card>
        <CardBody>
          {/* <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <div>
          {props.menuItems ? (
              <List>
                {props.menuItems.map(item => {
                    console.log(item)
                    return (
                    
                      <ListItem key= {item.name}>
                        <p>    
                          {item.name}                          
                        </p>
                        <p> {item.description} </p>
    
                      </ListItem>
                     );
                  })}
              </List>
            
            ) : (
              <p>No Results to Display</p>
            )} 
          
        </div>

          
       
        </CardBody>
      </Card>
    
  );
            
// } else{

//   return (
//     <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">Card title</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
//           {props.recipesObj.length ? (
//               <List>
//                 {props.recipesObj.map(test => {
//                   return (
//                     <ListItem key= {test.recipesObj.id}>
//                     <p>
//                       <a href={test.recipesObj.sourceUrl}>
//                       {test.recipesObj.title}                          
//                       </a> 
                      
//                     </p>
//                     {/* <p> {test.restaurant_phone}  </p> */}
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )} 
          
//           </CardText>
//         </CardBody>
//       </Card>
//   );
// }
  }

export default MenuList;
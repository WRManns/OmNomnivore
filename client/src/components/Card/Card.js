import React, { useEffect, useState } from "react";
import MenuItems from "./MenuCard";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
// import "./style.css";
/* import AutoCompleteRecipe from './recipeAutoAPI'
import SearchSimilarFoods from './recipeSearchAPI' */
import {List, ListItem} from "../List/index"
import { Link } from "react-router-dom";
// import { Recipe } from "../../../../models";


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
  // const Documenu = require('documenu')
  // Documenu.configure('55fb253bdfe336b05d390014b8d54a58')

    
  const Restaurant = (props) => {
    // const radioValue = props.radio.value
    // if (radioValue==="restaurant") {
      
      
  return (
      <Card>
        <CardBody>
    
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

                    <Button>
                        <Link to={{pathname: "/menu", state: props.query}} style={{ textDecoration: 'none', color: 'white'}}>Menu</Link>                                                 
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

export default Restaurant;

// const Recipes = (props) => {
//   // const radioValue = props.radio.value
//   // if (radioValue==="restaurant") {
    
    
// return (
//     <Card>
//       <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//       <CardBody>
//         <CardTitle tag="h5">Card title</CardTitle>
//         <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
//         {props.restaurants.length ? (
//             <List>
//               {props.restaurants.map(test => {
//                 console.log(test)
//                 return (
                  
//                 <ListItem key= {test.restaurant_id}>
//                   <p>
//                     <a href={test.restaurant_website}>
//                     {test.restaurant_name}                          
//                     </a> 
//                   </p>
//                   <p> {test.restaurant_phone} </p>

//                   <Button>
//                       <Link to="/menu" style={{ textDecoration: 'none', color: 'white'}}>Menu</Link>                                                 
//                   </Button>

//                 </ListItem>
//                 );
//               })}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )} 
        
//         </CardText>
//       </CardBody>
//     </Card>
//   );
// }

// export default Recipes;
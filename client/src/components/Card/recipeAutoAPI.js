/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/autocomplete?number=1&query=";
//const APIKEY = process.env.API_SPOON_KEY;
const BASEURL2 = "https://api.spoonacular.com/recipes/" ;

 let AutoCompleteRecipe = function(query) {
  return axios.get(BASEURL + query + '&apiKey=a2d495a4dfbf4e9fb494d80589c30e68' );//+ APIKEY );
}
 


 


export default AutoCompleteRecipe


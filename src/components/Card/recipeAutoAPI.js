/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/autocomplete?number=10&query=";
//const APIKEY = process.env.API_SPOON_KEY;
const BASEURL2 = "https://api.spoonacular.com/recipes/" ;


/* export default {
  
  AutoCompleteRecipe: function(query) {
    return axios.get(BASEURL + query + '&apiKey=656b711d844443bb95ffad917e8fd462' );//+ APIKEY );
  },
  SearchSimilarFoods: function(query) {
    return axios.get(BASEURL2 + query + "/similar?apiKey=656b711d844443bb95ffad917e8fd462");// + APIKEY);
  }
} */



 let AutoCompleteRecipe = function(query) {
  return axios.get(BASEURL + query + '&apiKey=5611695fd3084ec98bb237fe4c5823ed' );//+ APIKEY );
}
 


 


export default AutoCompleteRecipe


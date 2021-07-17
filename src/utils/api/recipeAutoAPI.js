import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/autocomplete?number=10&query=";
const APIKEY = process.env.API_SPOON_KEY;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AutoCompleteRecipe: function(query) {
    return axios.get(BASEURL + query + '&api_key=' +APIKEY );
  }
};
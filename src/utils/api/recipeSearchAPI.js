/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/"  ;
const APIKEY = process.env.API_SPOON_KEY;

export default {
  SearchSimilarFoods: function(query) {
    return axios.get(BASEURL + query + "/similar&api_key=" + APIKEY);
  }
};

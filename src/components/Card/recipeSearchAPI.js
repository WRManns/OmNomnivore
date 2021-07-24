/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/" ;
//const APIKEY = process.env.API_SPOON_KEY;


  let SearchSimilarFoods = function(query) {
    console.log(query)
    return axios.get(BASEURL + query + '/similar?apiKey=5611695fd3084ec98bb237fe4c5823ed' );//+ APIKEY );

    //return axios.get(BASEURL + query + "/similar?apiKey=" + APIKEY);
  }

export default SearchSimilarFoods

/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.spoonacular.com/recipes/" ;
//const APIKEY = process.env.API_SPOON_KEY;


  let SearchSimilarFoods = function(query) {
    console.log(query)
    return axios.get(BASEURL + query + '/similar?number=1&apiKey=a2d495a4dfbf4e9fb494d80589c30e68' );//+ APIKEY );

    //return axios.get(BASEURL + query + "/similar?apiKey=" + APIKEY);
  }

export default SearchSimilarFoods

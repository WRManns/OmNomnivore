import axios from "axios";
require('dotenv').config();


/* const BASEURL = 'https://api.documenu.com/v2/restaurants/zip_code/'
const BASEURL2 = '?size=10&key=8dd1d7be3d5e5a366a97dab169328b07'
 */
const testURL ='https://api.documenu.com/v2/restaurants/zip_code/48105?size=10&key=8dd1d7be3d5e5a366a97dab169328b07'

let getFoodNearYou = function(query) {
    return axios.get(testURL);//+ APIKEY );
  }
   
  

  export default getFoodNearYou

import axios from "axios";
require('dotenv').config();

const testURL ='https://api.documenu.com/v2/restaurants/search/fields?restaurant_name=Panera&exact=true&size=10&key=8dd1d7be3d5e5a366a97dab169328b07'

export function data() {
    axios.get(testURL)//+ APIKEY );
        .then(res =>res.data)
        .then(data => {
            this.setState({
                list:data
            })
        })

  }
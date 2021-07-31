import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'
import {data} from '../APITester';


class SearchForm extends Component{

  constructor(props) {
    super(props)

    this.state = {
      search: {
        query: props.query,
        radio:'default',
        list: data
      }
    };
  }

  componentWillMount() {
    data.call(this);
  }

  handleSearchChange = (event) => {
    var search = this.state.search;
    search.query = event.target.value;
  }

  handleRadioChange =(event)=> {
    var search = this.state.search;
    search.radio = event.target.value;
  

    console.log(this.state.search.radio);
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.search);
    console.log(this.state.list);
  }

  render() {
  return (
    <Form onSubmit={this.handleSubmit.bind(this)} >
      <FormGroup>
        <Input 
            className="w-25" 
            placeholder="enter search"
            type="text" 
            value={this.state.search.query}
            onChange={this.handleSearchChange.bind(this)} />
      </FormGroup> 
      <FormGroup className= "radioField" tag="fieldset" value={this.state.search.radio} onChange={this.handleRadioChange.bind(this)}>
        <FormGroup check>
          <Label check>
            <Input 
                type="radio" 
                value="recipe"
                name="radio1" 
                id="recipe-radio" 
                className="radio"
                />Search by Recipe
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input 
                type="radio"
                value="restaurant" 
                name="radio1" 
                id="restaurant-radio" 
                className="radio"
                />Search by Restaurant
          </Label>
        </FormGroup>
      </FormGroup>
      <Button 
        type='submit'
        name='search-btn'
        id= 'search-btn'
        className= 'searchbtn'
      >
        Search
        </Button>
    </Form>
  );

  }
}
export default SearchForm;
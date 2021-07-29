import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'


class SearchForm extends Component{

  constructor(props) {
    super(props)

    this.state = {
      search:'',
      radio:'default'
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleRadioChange =(event)=> {
    this.setState({
      radio: event.target.value
    })
    console.log(this.state.radio);
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(`${this.state.search}`)
  }

  render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Input 
            className="w-25" 
            placeholder="enter search"
            type="text" 
            value={this.state.search}
            onChange={this.handleSearchChange} />
      </FormGroup> 
      <FormGroup className= "radioField" tag="fieldset" value={this.state.radio} onChange={this.handleRadioChange}>
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
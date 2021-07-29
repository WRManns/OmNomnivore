import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SearchForm.css'


class SearchForm extends Component{

  constructor(props) {
    super(props)

    this.state = {
      search:'',
      radio:'recipe'
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
      <FormGroup tag="fieldset" value={this.state.radio} onChange={this.handleRadioChange}>
        <FormGroup check>
          <Label check>
            <Input 
                type="radio" 
                value="recipe"
                name="radio1" 
                id="recipe-radio" 
                className="radio"
                />{' '}
            Option one is this and that—be sure to include why it's great
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
                />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
      </FormGroup>
      <Button 
        type='submit'
        name='search-btn'
        id= 'search-btn'
        className= 'searchbtn'
      >
        Submit
        </Button>
    </Form>
  );

  }
}
export default SearchForm;
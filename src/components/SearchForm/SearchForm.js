import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css'
const SearchForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup> 
      <FormGroup tag="fieldset">
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" id="recipe-radio" className="radio"/>{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" id="restaurant-radio" className="radio" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default SearchForm;
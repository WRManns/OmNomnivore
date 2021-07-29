import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>First Car</option>
          <option>Mother's Maiden Name</option>
          <option>Favorite Pet's Name</option>
          <option>Elementary School</option>
          <option>Favorite Ice Cream Flavor</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Example;
=======
const Register = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label style={{color: "green"}} for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label style={{color: "green"}} for="username">UserName</Label>
        <Input type="username" name="username" id="username" placeholder="username placeholder" />
      </FormGroup>
      <FormGroup>
        <Label style={{color: "green"}} for="Zipcode">ZipCode</Label>
        <Input type="zipcode" name="zipcode" id="zipcode" placeholder="zipcode placeholder" />
      </FormGroup>
      <FormGroup>
        <Label style={{color: "green"}} for="Password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password placeholder" />
      </FormGroup>
      </Form> )}
      export default Register

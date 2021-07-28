import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Register = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="username">UserName</Label>
        <Input type="username" name="username" id="username" placeholder="username placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="Zipcode">ZipCode</Label>
        <Input type="zipcode" name="zipcode" id="zipcode" placeholder="zipcode placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password placeholder" />
      </FormGroup>
      </Form> )}
      export default Register
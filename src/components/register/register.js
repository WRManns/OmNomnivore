import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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
      </Form> )};

export default Register

import React from 'react';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Card, Button} from 'reactstrap';
import "./register.css"

function Register() {
  let history = useHistory();

  return (
  
    <Card  className="Register">
     <Form id="registerForm" name="registerForm">
      <Label for = "registerForm" style={{color:"green", fontSize:35}} >Register</Label>
      <FormGroup>
        <Label style={{color: "green"}} for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="username">UserName</Label>
        <Input type="username" name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="Zipcode">ZipCode</Label>
        <Input type="zipcode" name="zipcode" id="zipcode" placeholder="zipcode" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="Password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <Button onClick={()=>{history.push('/home')}} variant="secondary" size="lg">
      Register
     </Button>
      </Form>
      </Card> )}
      
      export default Register

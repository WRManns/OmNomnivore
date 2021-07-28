import React from 'react';
import { Form, FormGroup, Label, Input,} from 'reactstrap';
import "./signin.css"


const SignIn = (props) => {
  return (
      
    <Form>
      <FormGroup id="User" style={{width: 300}}>
        <Label for="exampleUsername"style={{color: "green"}}>Username</Label>
        <Input type="username" name="username" id="username" placeholder="username placeholder" />
      </FormGroup>
      <FormGroup style={{width: 300}}>
        <Label for="examplePassword" style={{color: "green"}}>Password</Label>
        <Input type="password" name="password" id="password" placeholder="password placeholder" />
      </FormGroup>
      
      </Form> )}
      export default SignIn

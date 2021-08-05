import React from 'react';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input,Button} from 'reactstrap';
import {Card} from 'reactstrap';
import "./signin.css"

function SignIn() {
  let history = useHistory();

  return (
    <Card className="SignIn">
      
      <Form id="signInForm" name="signInForm">
        <Label for = "signInForm" style={{color:"green", fontSize:35}} >Sign In</Label>
        <FormGroup id="User" >
          <Label for="exampleUsername"style={{color: "green"}}>Username</Label>
          <Input type="username" name="username" id="username" placeholder="username placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" style={{color: "green"}}>Password</Label>
          <Input type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={()=>{history.push('/home')}} id="signin" variant="primary" size="lg">
          Sign-in
        </Button>{' '}
      
      </Form> 
    </Card>  )}
      export default SignIn
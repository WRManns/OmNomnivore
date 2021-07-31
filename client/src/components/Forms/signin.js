import React from 'react';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input,Button} from 'reactstrap';
import {Card} from 'reactstrap';
import "./signin.css"


function SignIn() {
  let history = useHistory();

  return (
    <Card className="SignIn">
      <h1>Sign-In</h1>
    <Form>
      <FormGroup id="User" style={{width: 300}}>
        <Label for="exampleUsername"style={{color: "green"}}>Username</Label>
        <Input type="username" name="username" id="username" placeholder="username placeholder" />
      </FormGroup>
      <FormGroup style={{width: 300}}>
        <Label for="examplePassword" style={{color: "green"}}>Password</Label>
        <Input type="password" name="password" id="password" placeholder="password placeholder" />
      </FormGroup>
      <Button onClick={()=>{history.push('/home')}} id="signin" variant="primary" size="lg">
       Sign-in
      </Button>{' '}
      
      </Form> 
      </Card>  )}
      export default SignIn

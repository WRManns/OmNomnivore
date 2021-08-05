import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input,Button} from 'reactstrap';
import {Card} from 'reactstrap';
import "./signin.css"
import API from "../../utils/API"

function SignIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  
  const handleSubmit = e => {
    
    API.login({ username, password}).then(res => {
      console.log(res)
      if (res.status === 200) {
        history.push('/home')
      }
    })
  }
  return (
    <Card className="SignIn">
      
      <Form id="signInForm" name="signInForm">
        <Label for = "signInForm" style={{color:"green", fontSize:35}} >Sign In</Label>
        <FormGroup id="User" >
          <Label for="exampleUsername"style={{color: "green"}}>Username</Label>
          <Input onChange={e => setUsername(e.target.value)}type="username" name="username" id="username" placeholder="username placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" style={{color: "green"}}>Password</Label>
          <Input onChange={e => setPassword(e.target.value)}type="password" name="password" id="password" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={handleSubmit} id="signin" variant="primary" size="lg">
          Sign-in
        </Button>
      
      </Form> 
    </Card>  )}
      export default SignIn
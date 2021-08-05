import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Card, Button} from 'reactstrap';
import "./register.css"
import API from "../../utils/API"

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [zipcode, setZipcode] = useState();
  const [email, setEmail] = useState();
  let history = useHistory();
  
  const handleSubmit = e => {
    
    API.register({ username, password, zipcode, email }).then(res => {
      console.log(res)
      if (res.status === 200) {
        history.push('/home')
      }
    })
  }

  return (
  
    <Card  className="Register">
     <Form id="registerForm" name="registerForm">
      <Label for = "registerForm" style={{color:"green", fontSize:35}} >Register</Label>
      <FormGroup>
        <Label style={{color: "green"}} for="email">Email</Label>
        <Input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="email" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="username">UserName</Label>
        <Input onChange={e => setUsername(e.target.value)} type="username" name="username" id="username" placeholder="username" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="Zipcode">ZipCode</Label>
        <Input onChange={e => setZipcode(e.target.value)} type="zipcode" name="zipcode" id="zipcode" placeholder="zipcode" />
      </FormGroup>
      <FormGroup >
        <Label style={{color: "green"}} for="Password">Password</Label>
        <Input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <Button onClick={handleSubmit} variant="secondary" size="lg">
      Register
     </Button>
      </Form>
      </Card> )}
      
      export default Register

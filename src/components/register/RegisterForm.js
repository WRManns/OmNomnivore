import React from 'react';
<<<<<<< HEAD:src/components/register/RegisterForm.js
import {useHistory} from 'react-router-dom';
import { Form, FormGroup, Label, Input, Card, Button} from 'reactstrap';
import "./register.css"

function Register() {
  let history = useHistory();
=======
import { Form, FormGroup, Label, Input } from 'reactstrap';
>>>>>>> c99f560fc6a5a76daec8e38a08211cc88ccc5139:src/components/register/register.js

  return (
  
    <Card  className="Register">
    <Form>
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
<<<<<<< HEAD:src/components/register/RegisterForm.js
      <Button onClick={()=>{history.push('/home')}} variant="secondary" size="lg">
      Register
     </Button>
      </Form>
      </Card> )}
      
      export default Register
=======

      </Form> 
      )}


      </Form> )};
      </Form> )}

      export default Register
>>>>>>> c99f560fc6a5a76daec8e38a08211cc88ccc5139:src/components/register/register.js

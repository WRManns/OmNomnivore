import React from 'react';
import { Button } from 'reactstrap';
import "./btns.css"

function LogBtn(){
  return(
<div className="buttons">
<Button id="signin" variant="primary" size="lg">
  Sign-in
</Button>{' '}
<Button variant="secondary" size="lg">
  Register
</Button>
</div>
  )}
export default LogBtn
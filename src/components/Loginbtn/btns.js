import React from 'react';
import { Button } from 'reactstrap';
function LogBtn(){
  return(
<div className="buttons">
<Button variant="primary" size="lg">
  Sign-in
</Button>{' '}
<Button variant="secondary" size="lg">
  Register
</Button>
</div>
  )}
export default LogBtn
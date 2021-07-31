import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import "./Welcome.css"
const Intro= (props) => {
  return (
    <div>
      <Card className="Card">
        <CardHeader><h1>Welcome to Omnomnivore</h1></CardHeader>
        <CardBody>
          <CardTitle><h2>Your App solution for Dining in or out!</h2></CardTitle>
          <CardText><p>Have you ever tried to figure out if its easier to prepare something at home for that special someone or just plan for a date out? Omnomnivore allows you to compare local menus to entre recipes equivalents on its simple to use site.

Search recipes by food name, or search for area restaurants to see their menus; Both options are available to help you set the tone for a perfect meal, either way.</p></CardText>
        </CardBody>
        <CardFooter><p>
Thank you for visiting our site. Please be sure to share with your friends!</p></CardFooter>
        
      </Card>
    </div>
  );
};

export default Intro;
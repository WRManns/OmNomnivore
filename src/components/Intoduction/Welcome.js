import React from 'react';
import { Card, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const Intro= (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Welcome to Omnomnivore</CardHeader>
        <CardBody>
          <CardTitle tag="h5">Your App solution for Dining in or out!</CardTitle>
          <CardText>Have you ever tried to figure out if its easier to prepare something at home for that special someone or just plan for a date out? Omnomnivore allows you to compare local menus to entre recipes equivalents on its simple to use site.

Search recipes by food name, or search for area restaurants to see their menus; Both options are available to help you set the tone for a perfect meal, either way.</CardText>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Intro;
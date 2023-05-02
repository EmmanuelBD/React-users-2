import React from 'react';
import { Card, Title, Body, SubTitle, Text, Col } from 'react-bootstrap';

const User = (props) => {
    return (
        <Col md="3" style={{marginBottom: "1rem"}}>
    <Card>
      <Card.Body>
        
        <Card.Subtitle className="mb-2 text-muted">
            Codetrain User
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
        <Card.Text>
          <p>Email: {props.userInfo.email}</p>
          <p>Gen:{props.userInfo.gen}</p>
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>

        </Col>
    );
}

export default User;


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUserForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      gen
    };
    props.addUser(newUser);
    setName('');
    setEmail('');
    setGen('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="gen">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" value={gen} onChange={(e) => setGen(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
};

export default AddUserForm;


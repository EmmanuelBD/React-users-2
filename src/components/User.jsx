/*
import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>

      <Col md="3" style={{ marginBottom: '1rem' }}>
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;  */


// User.js
import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

const User = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>

      <Card style={{ width: '18rem', marginBottom: '1rem' }}>
        <Card.Body>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {props.userInfo.email}
          </Card.Text>
          <Card.Text>
            <strong>Gen:</strong> {props.userInfo.gen}
          </Card.Text>
          <Button variant="primary" onClick={handleShow} style={{ marginRight: '0.5rem' }}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default User; 

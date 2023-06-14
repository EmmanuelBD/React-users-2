
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser, editUser } from './store/usersActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  deleteUser = (id) => {
    this.props.deleteUser(id);
  };

  editUser = (id, updatedUser) => {
    this.props.editUser(id, updatedUser);
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: '2rem' }}>
          <Row>
            <Col md="4">
              <h4>Add User</h4>
              <br />
              <AddUserForm addUser={this.props.addUser} />
            </Col>
            <Col>
              <h4>All Users</h4>
              <br />
              <Users usersData={this.props.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser,
  deleteUser,
  editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row , Col} from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "John Doe",
          email: "johndoe@email.com",
          gen: 12,
          id: "111"
        },
        {
          name: "Sandra Fox",
          email: "sandrafox@email.com",
          gen: 13,
          id: "222"
        },
        {
          name: "Greg Cole",
          email: "gregcole@email.com",
          gen: 14,
          id: "333"
        },
      ]
    }
  }

  addNewUser = (user) => {
    user.id = Math.random().toString()
        this.setState({
          users:  [...this.state.users, user]
        })
  }

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }
  render(){
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <h4>Add User</h4>
            <br/>
            <AddUserForm addUser = {this.addNewUser} />
          </Col>
          <Col>
          <h4>All Users</h4>
          <br/>
            <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
          </Col>
        </Row> 
      </Container>
    </>
  );}
}

export default App;

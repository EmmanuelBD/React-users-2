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
          gen: 12
        },
        {
          name: "Sandra Fox",
          email: "sandrafox@email.com",
          gen: 13
        },
        {
          name: "Greg Cole",
          email: "gregcole@email.com",
          gen: 14
        },
      ]
    }
  }

  addNewUser = (user) => {
        this.setState({
          users:  [...this.state.users, user]
        })
  }
  render(){
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <AddUserForm addUser = {this.addNewUser} />
          </Col>
          <Col>
            <Users usersData={this.state.users}/>
          </Col>
        </Row> 
      </Container>
    </>
  );}
}

export default App;

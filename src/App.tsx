import React from 'react';
import logo from './logo.svg';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';


function App() {
  return (

      <div className="App">

          <NavBar bg="dark" variant="dark">
            <Container>
              <NavBar.Brand>
                <Link to={'/'} className='nav-link'>
                  React MERN Stack
                </Link>
              </NavBar.Brand>

              <Nav className='justify-content-end'>
                <Nav>
                  <Link to={'/create-student'} className='nav-link'>
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className='nav-link'>
                    Student List
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </NavBar>

        <Container>
          <Row>
            <Col md='12'>
              <div className='wrapper'>
                <Routes>
                  <Route path='/' Component={CreateStudent} />
                  <Route path='/create-student' Component={CreateStudent} />
                  <Route path='/edit-student/:id' Component={EditStudent} />
                  <Route path='/student-list' Component={StudentList} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

  );
}

export default App;

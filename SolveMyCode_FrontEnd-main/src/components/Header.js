import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import "./Header.css";
import { Button } from 'react-bootstrap';
export default function Header() {
  return (
      <Navbar  variant="dark" style={{ height: "50px" , background:"#F47A20"}}>
        <Container >
            <Link to="/" >
              <img alt="#" src={logo} style={{ height: "80px" }}/>
            </Link>       
          <Nav className='btn'>
           <Button> <Link to="/login" className="btn1">Login</Link></Button>
          </Nav>
        </Container>
      </Navbar>
  )
}

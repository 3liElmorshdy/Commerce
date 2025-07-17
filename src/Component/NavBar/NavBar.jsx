import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { Data } from '../../Context2/Counter';
import {  useSelector } from 'react-redux';



function NavBar() {
// const Test = useContext(Data)
//   console.log( "this is thw ",Test)
// console.log("test")
const state = useSelector((state)=>state.count.counter)
console.log("thisis",state)


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       {/* <i className="fa-solid fa-cart-shopping" style={{cursor:'pointer'}}> {Test.count}</i> */}
       <i className="fa-solid fa-cart-shopping" style={{cursor:'pointer'}}> {state}</i>
</Container>
    </Navbar>
  );
}

export default NavBar;

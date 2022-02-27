import React from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'
import "./Header.css"
const Header = () => {
  return (
    <div>
       <Navbar className='navbar' bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#"> <img 
            src="/SICAR2.png"
            width="180 px"
            height="65 px"
            
            alt="React Bootstrap logo"
          />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
    className="Offcanvas"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><img 
            src="/SICAR2.png"
            
            width="280 px"
            height="65px"
            className="logo"
            alt="React Bootstrap logo"
          /></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Nous Conaitre</Nav.Link>
          <Nav.Link href="#action2">Nos Fonds</Nav.Link>
          <Nav.Link href="#action2">Respensabilté Sociale</Nav.Link>
          <Nav.Link href="#action2">Nos Réalisations</Nav.Link>
          <Nav.Link href="#action2">Actualités</Nav.Link>
          <Nav.Link href="#action2">Cantact</Nav.Link>
          <Nav.Link href="#action2">Lexique</Nav.Link>

        
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
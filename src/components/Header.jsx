import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button }from 'react-bootstrap';

function Header(){
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Tip Top Taps</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#keglist">Keg List</Nav.Link>
            <NavDropdown title="Kegmeisters Only" id="basic-nav-dropdown">
              <NavDropdown.Item href="#newkegform">Add Keg</NavDropdown.Item>
              <NavDropdown.Item href="#editkegform">Edit Keg List</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;

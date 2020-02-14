import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button }from 'react-bootstrap';
import "../Header.css";
function Header(){
  const HeaderGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px',
    backgroundColor: 'gray'
  }



  return (
    <>
    <Navbar style={HeaderGrid}>
      <Navbar.Brand href="#home" className="tavernName">Tip Top Taps</Navbar.Brand>
      <div id="header">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#keglist">Keg List</Nav.Link>
            <NavDropdown title="Kegmeisters Only" id="basic-nav-dropdown">
              <NavDropdown.Item href="#newkegform">Add Keg</NavDropdown.Item>
              <NavDropdown.Item href="#editkegform">Edit Keg List</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl type="text" placeholder="Show me a keg..." className="mr-sm-2" />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
);
}

export default Header;

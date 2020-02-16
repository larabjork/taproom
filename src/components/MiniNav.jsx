import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function MiniNav() {
  const linkStyles = {
    paddingTop: '5px',
    paddingRight: '15px'
  };
  const miniStyles = {
    height: '72px',
    fontSize: '13px',
    paddingRight: '70px'
  };
  return (
    <div style={miniStyles}>
      <Navbar expand="lg">
         <Nav className="ml-auto">
          <Nav.Link href="#home" style={linkStyles}>Staff Signin</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MiniNav;

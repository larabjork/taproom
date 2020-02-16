import React from 'react';
import {Navbar} from 'react-bootstrap';

function BottomNav() {
    const Footer = {
      borderTop: '8px solid #141414',
      borderBottom: '8px solid #141414',
      backgroundColor: '#596FFF'
    }


    return (
      <>
      <Navbar style={Footer}>
        <Navbar.Brand href="#home" className="tavernName">Tip Top Taps, 121 Tapan Zee Blvd., Topanga Canyon, CA</Navbar.Brand>
      </Navbar>
      </>
  );
  }

export default BottomNav;

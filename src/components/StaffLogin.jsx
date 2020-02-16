import React from 'react';
import { Form, FormControl, Button, Container }from 'react-bootstrap';

const btnStyleLogin = {
  backgroundColor: '#002642',
  borderColor: '#002642',
  color: 'white'
}

function StaffLogin(){
  return (
    <div>
      <Container>
        <div className='heading1'>
          <style jsx>{`
              .heading1 {
                font-family: 'Permanent Marker', cursive;
              }
              `}</style>
            <h1>Hey, Kegmeister!</h1>
          </div>
          <p>Welcome to your shift. Happy pouring!</p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button style={btnStyleLogin} type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default StaffLogin;

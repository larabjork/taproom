import React from 'react';
import { Form, Button, Container }from 'react-bootstrap';

const btnStyleKeg = {
  backgroundColor: '#141414',
  borderColor: '#141414',
  color: 'white',
  fontWeight: 'bold'
}

function EditKegForm(){
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
      <p>Thanks for tidying up our keg list with these edits. Make sure to log out from this terminal when you're done!</p>
      <Form>
        <Form.Group controlId="formBeerName">
          <Form.Label>Beer Name</Form.Label>
          <Form.Control type="text" placeholder="Beer Name" />
        </Form.Group>
        <Form.Group controlId="formBrand">
          <Form.Label>Brewery</Form.Label>
          <Form.Control as="select">
          <option>Anonymous Local Brewing Co.</option>
          <option>Conjunction Junction Co.</option>
          <option>Hair-O-the-Dog</option>
          <option>Sparkle Brewz</option>
          <option>Sunshine Brewing</option>
        </Form.Control>
      </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price $</Form.Label>
          <Form.Control type="text" placeholder="5" />
        </Form.Group>
        <Form.Group controlId="formAlcoholContent">
          <Form.Label>ABV %</Form.Label>
          <Form.Control type="text" placeholder="7" />
        </Form.Group>
        <Form.Group controlId="formPintsRemaining">
          <Form.Label>Pints Remaining</Form.Label>
          <Form.Control type="text" placeholder="124" />
            <Form.Text className="text-muted">
              We know you know that this is almost always 124 pints, but please make sure you're not dealing with a pony keg situation!
            </Form.Text>
        </Form.Group>
        <Button style={btnStyleKeg} type="submit">Save to Keg List</Button>
      </Form>
    </Container>
    </div>
  );
  }

export default EditKegForm;

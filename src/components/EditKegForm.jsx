import React from 'react';
import { Form, FormControl, Button }from 'react-bootstrap';

const btnStyleKeg = {
  backgroundColor: '#002642',
  borderColor: '#002642',
  color: 'white'
}

function EditKegForm(){
  return (
    <div>
      <h1>Hey, Kegmeister!</h1>
      <p>Thanks for tidying up our keg list with these edits. Make sure to log out from this terminal when you're done!</p>
      <Form>
        <Form.Group controlId="formBeerName">
          <Form.Label>Beer Name</Form.Label>
          <Form.Control type="text" placeholder="Beer Name" />
        </Form.Group>
        <Form.Group controlId="formBrand">
          <Form.Label>Brewery</Form.Label>
          <Form.Control type="text" placeholder="Brewery" />
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
              Pints remaining is almost always 124, but please make sure you're not dealing with a pony keg situation!
            </Form.Text>
        </Form.Group>
        <Button style={btnStyleKeg} type="submit">Save to Keg List</Button>
      </Form>

    </div>
  );
}

export default EditKegForm;

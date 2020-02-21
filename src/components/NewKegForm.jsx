import React from 'react';
import { Button, Container }from 'react-bootstrap';
import PropTypes from 'prop-types';


const btnStyleKeg = {
  backgroundColor: '#141414',
  borderColor: '#141414',
  color: 'white',
  fontWeight: 'bold'
}

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsRemaining = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
      props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pintsRemaining: _pintsRemaining.value});
      _name.value = '';
      _brand.value = '';
      _price.value = '';
      _alcoholContent.value = '';
      _pintsRemaining.value = '';
    }

  return (
    <div>
      <Container>
        <div>
        <div className='heading1'>
          <style jsx>{`
              .heading1 {
                font-family: 'Permanent Marker', cursive;
              }
              `}</style>
            <h1>Hey, Kegmeister!</h1>
          </div>
          <p>Thanks for keeping our keg list up to date. Make sure to log out from this terminal when you're done!</p>
        </div>
        <form onSubmit={handleNewKegFormSubmission}>
            <input
              type='text'
              id='beerName'
              placeholder='Beer Name'
              ref={(input) => {_name = input;}}/>
           <input
              type='text'
              id='beerBrand'
              placeholder='Brewery'
              ref={(input) => {_brand = input;}}/>
           <input
              type='number'
              id='price'
              placeholder='Price'
              ref={(input) => {_price = input;}}/>
           <input
              type='number'
              id='alcoholContent'
              placeholder='ABV'
              ref={(input) => {_alcoholContent = input;}}/>
           <input
              type='number'
              id='pintsRemaining'
              placeholder='124'
              ref={(input) => {_pintsRemaining = input;}}/>
          <Button style={btnStyleKeg} type="submit">Save to Keg List</Button>
        </form>

      </Container>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

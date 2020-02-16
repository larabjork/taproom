
import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';

const kegStyle = {
  backgroundColor: '#E59500',
  border: '2px solid #02040F',
  fontFamily: 'Open Sans'
}

const btnStylePintSold= {
  backgroundColor: '#002642',
  borderColor: '#002642',
  color: 'white'
}


function Keg(props){
  return (
    <div>
      <Card text="white" style={{ width: '18rem' }}>
        <Card.Body style={kegStyle}>
          <div>
            <Card.Title>{props.name}</Card.Title>
            <style jsx>{`
                .card-title {
                  font-family: 'Permanent Marker', cursive;
                  font-size: 56px;
                }
                `}
              </style>
            </div>
            <Card.Text>
              <p>Brewery: {props.brand}</p>
              <p>Price: ${props.price}</p>
              <p>Alcohol by Volume: {props.alcoholContent}</p>
              <p>Pints Remaining: {props.pintRemaining} out of 124</p>
            </Card.Text>
            <Button style={btnStylePintSold}>1 Pint Sold!</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    alcoholContent: PropTypes.number,
    pintRemaining: PropTypes.number
  };


  export default Keg;

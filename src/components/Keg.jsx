import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup, Accordion } from 'react-bootstrap';

function Keg(props){
  return (
    <div>
      <Accordion >
        <Card className="kegCard" style={{ width: '18rem' }}>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader">
            {props.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p><em>Brewery: {props.brand}</em></p>
              <p><em>Price: ${props.price}</em></p>
              <p><em>Alcohol by Volume: {props.alcoholContent}%</em></p>
              <p><em>Pints Remaining: {props.pintRemaining} out of 124</em></p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
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

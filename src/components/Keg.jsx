
import React from "react";
import PropTypes from "prop-types";
import { Accordion, Card } from 'react-bootstrap';

const kegStyle = {
  backgroundColor: '#141414',
  border: '4px solid #141414',
  fontFamily: 'Open Sans',
  borderRadius: '8px',
  marginTop: '5px'
}

function Keg(props){
  const kegInformation =
    <div>
      <Accordion defaultActiveKey="0">
        <Card text="white"  style={kegStyle}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Card.Title>{props.name}</Card.Title>
            <style jsx>{`
                .card-title {
                  font-family: 'Permanent Marker', cursive;
                  font-size: 56px;
                }
                `}
              </style>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body >
              <Card.Text>
                <p>Brewery: {props.brand}</p>
                <p>Price: ${props.price}</p>
                <p>Alcohol by Volume: {props.alcoholContent}</p>
                <p>Pints Remaining: {props.pintsRemaining} out of 124</p>
              </Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsRemaining: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};


  export default Keg;

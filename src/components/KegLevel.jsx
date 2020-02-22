import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, Button } from 'react-bootstrap';

const kegStyle = {
  backgroundColor: '#141414',
  border: '4px solid #141414',
  fontFamily: 'Open Sans',
  borderRadius: '8px',
  marginTop: '5px'
}

const btnStylePintSold= {
  backgroundColor: '#EEC643',
  borderColor: '#EEC643',
  color: '#141414',
  fontWeight: 'bold'
}


function KegLevel(props){
  return (
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
              <Button style={btnStylePintSold}>1 Pint Sold!</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

KegLevel.propTypes = {
  selectedKegLevel: PropTypes.object
};
export default KegLevel;

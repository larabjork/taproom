import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Accordion, Card, Button } from 'react-bootstrap';

const kegStyle = {
  backgroundColor: 'white',
  border: '4px solid white',
  fontFamily: 'Open Sans',
  borderRadius: '8px',
  marginTop: '5px',
}

const btnStylePintSold= {
  backgroundColor: '#EEC643',
  borderColor: '#EEC643',
  color: '#141414',
  fontWeight: 'bold'
}


function KegDetail(props){
  const [counter, setCounter] = useState(124)
  return (
    <div>
      <Card text="black"  style={kegStyle}>
        <Card.Body>
          <Card.Title>{props.selectedKeg.name}</Card.Title>
            <style jsx>{`
              .card-title {
                font-family: 'Permanent Marker', cursive;
                font-size: 56px;
              }
              `}
            </style>
          <Card.Text>
            <p>Pints Remaining: {counter} out of 124</p>
          </Card.Text>
            <Button style={btnStylePintSold} onClick={() => setCounter(counter-1)}>1 Pint Sold!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};
export default KegDetail;

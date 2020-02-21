import React from 'react';
import Keg from './Keg'
import { Container }from 'react-bootstrap';
import PropTypes from 'prop-types';



function KegList(props){
  return (
    <div>
      <div className='heading1'>
        <style jsx>{`
            .heading1 {
              font-family: 'Permanent Marker', cursive;
              font-size: 65px;
              text-align: center;
            }
            `}</style>
          <p>Our Current Beers</p>
        </div>

      <Container>
        {props.kegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            key={index}/>
        )}
      </Container>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList

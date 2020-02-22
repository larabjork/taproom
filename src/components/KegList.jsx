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
        {Object.keys(props.kegList).map(function(kegId) {
          let keg = props.kegList[kegId];
          return <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintsRemaining={keg.pintsRemaining}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            kegId={kegId}
            onKegSelection={props.onKegSelection}/>;
        })}
      </Container>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList

import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
      <div>
        <h3>{props.names}</h3>
        <p><em>{props.brand}</em></p>
        <p><em>{props.price}</em></p>
        <p><em>{props.alcoholContent}</em></p>
        <p><em>{props.pintRemaining}</em></p>
        <hr/>
      </div>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintRemaining: PropTypes.number
};


export default Keg;

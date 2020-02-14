import React from 'react';
import Keg from './Keg'

let masterKegList = [
  {
    names: 'Scala',
    brand: 'Anonymous Local Brewing Co.',
    price: '4',
    alcoholContent: '5%',
    pintRemaining: '120'
  },
  {
    names: 'Ruby',
    brand: 'Sparkle Brewz',
    price: '6',
    alcoholContent: '4%',
    pintRemaining: '120'
  },
  {
    names: 'Java',
    brand: 'Sunshine Brewing',
    price: '6',
    alcoholContent: '7%',
    pintRemaining: '120'
  },
  {
    names: 'Django',
    brand: 'Sparkle Brewz',
    price: '4',
    alcoholContent: '4%',
    pintRemaining: '120'
  },
  {
    names: 'Fortran',
    brand: 'Anonymous Local Brewing Co.',
    price: '5',
    alcoholContent: '7%',
    pintRemaining: '120'
  }
];

function KegList(){
  return (
  <div>
    <hr/>
    {masterKegList.map((keg, index) =>
      <Keg names={keg.names}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pintRemaining={keg.pintRemaining}
        key={index}/>
    )}
  </div>
);
}


export default KegList

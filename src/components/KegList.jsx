import React from 'react';
import Keg from './Keg'
import { Container }from 'react-bootstrap';




let masterKegList = [
  {
    name: 'Scala',
    brand: 'Anonymous Local Brewing Co.',
    price: '4',
    alcoholContent: '5%',
    pintRemaining: '120'
  },
  {
    name: 'Ruby',
    brand: 'Sparkle Brewz',
    price: '6',
    alcoholContent: '4%',
    pintRemaining: '120'
  },
  {
    name: 'Java',
    brand: 'Sunshine Brewing',
    price: '6',
    alcoholContent: '7%',
    pintRemaining: '120'
  },
  {
    name: 'Django',
    brand: 'Sparkle Brewz',
    price: '4',
    alcoholContent: '4%',
    pintRemaining: '120'
  },
  {
    name: 'Fortran',
    brand: 'Anonymous Local Brewing Co.',
    price: '5',
    alcoholContent: '7%',
    pintRemaining: '120'
  }
];

function KegList(){
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
        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pintRemaining={keg.pintRemaining}
            key={index}/>
        )}
      </Container>
    </div>
  );
}


export default KegList

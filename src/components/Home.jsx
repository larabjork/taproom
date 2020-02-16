import React from 'react';
import {Carousel, Container, Row, Col}  from 'react-bootstrap';
import bottles from '../assets/images/bottles.jpg';
import corner from '../assets/images/corner-bar.jpg';
import stein from '../assets/images/stein.jpg';
import tap from '../assets/images/tap_with_glass.jpg';


const carouselBody = {
  paddingTop: "8px",
  height: "100%"
}



function Home(){
  return (
    <>
    <div style={carouselBody}>
      <Container>
        <div className='heading1'>
          <style jsx>{`
              .heading1 {
                font-family: 'Permanent Marker', cursive;
                font-size: 65px;
                text-align: center;
              }
              `}</style>
            <p>Welcome to Tip Top Taps</p>
          </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={tap}
            alt="taps with a snifter glass upsidedown"
            />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={stein}
            alt="stein of medium-amber beer"
            />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={bottles}
            alt="Four brown glass bottles"
            />
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={corner}
            alt="Photo looking into the corner of an empty bar"
            />
        </Carousel.Item>


      </Carousel>
      </Container>
    </div>
    </>
  );
}

export default Home;

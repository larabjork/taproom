import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import bottles from '../assets/images/bottles.jpg';
import cinti from '../assets/images/cinti.png';
import empty from '../assets/images/empty-bar.jpg';
import macleod from '../assets/images/macleod_tap.jpg';
import outside from '../assets/images/outside_seating.jpg';
import people from '../assets/images/two-people.jpg';

const carouselBody = {

  // textShadow: 1px 1px 2px black, 0 0 0.5em grey, 0 0 0.2em darkgrey;
  color: "white",
  paddingTop: "8px"
}

const carouselImg = {
  height: '480px',
  width: 'auto',
  borderRadius: '12px',
  border: '1px solid #1D3F29'
}


function Home(){
  return (
    <>
    <div id='carouselBody'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={bottles}
            alt="Four brown glass bottles"
            />
          <Carousel.Caption>
            <h3>We like to bring you the unusual</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={empty}
            alt="Empty bar"
            />
          <Carousel.Caption>
            <h3>Pull up a seat!</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={cinti}
            alt="Historical print of brewery in Cincinnati, Ohio"
            />
          <Carousel.Caption>
            <h3>Craft beer is in our DNA</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={macleod}
            alt="Person pouring a beer from a line of taps"
            />
          <Carousel.Caption>
            <h3>Our staff is knowledgable and enthustiastic about brewcraft</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={outside}
            alt="Many people outside at picnic tables"
            />
          <Carousel.Caption>
            <h3>When summer comes, our patio is the place to be</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={people}
            alt="Group of people sharing food and drink"
            />
          <Carousel.Caption>
            <h3>FCheck out our food, too!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}

export default Home;

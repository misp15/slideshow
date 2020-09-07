import React from 'react';
import '../Css/App.scss';
import carouselSlidesData from './CarouselSlidesData';
import Carousel from './Carousel';

//CarouselSlidesData sends to <Carousel /> slides parameter

function App() {
  return (
     
      <div className="App-header carousel-container">
          <Carousel slides={carouselSlidesData} />
      </div>
  );
}

export default App;


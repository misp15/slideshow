import React from 'react';
import '../Css/App.scss';
import carouselSlidesData from './CarouselSlidesData';
import Carousel from './Carousel';

function App() {
  return (
     
      <div className="App-header carousel-container">
          <Carousel slides={carouselSlidesData} />
      </div>
  );
}

export default App;


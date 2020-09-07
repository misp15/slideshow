import React, { Component } from 'react';

import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselSlide from './CarouselSlide';
import CarouselRightArrow from './CarouselRightArrow';



// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);


    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  //checks activeIndex: and decrease it after it count how many slides it in CarouselSlidesData.js
  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  //checks activeIndex: if it is 2 then set state to 1 so it loops throw the index 0 1 2 (lenght is 3)
  //check the consol in the webbrowser at milicas.se
  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <header className="App-header  header">
          <a
            className="fab fa-github"
            href="https://github.com/misp15/slideshow"
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{ __html: '' }}
          />

        </header>
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {console.log(this.props.slides)}
          {console.log(this.state.activeIndex)}
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
      </div>
    );
  }
}

export default Carousel;
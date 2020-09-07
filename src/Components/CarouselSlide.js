import React, { Component } from 'react';

// checks if index and activeIndex are the same then give it display: block in carousel__slide--active className
//also this.props.slide.image is background__image1, background__image2 or background__3
class CarouselSlide extends Component {
  render() {
    return (
      <li 
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active" 
            : "carousel__slide"
        }
      >
    
        <div className={`App-header ${this.props.slide.image}`}></div>

      </li>
     

     
    );
  }
}


export default CarouselSlide;
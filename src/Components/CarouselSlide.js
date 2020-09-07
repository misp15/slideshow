import React, { Component } from 'react';


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
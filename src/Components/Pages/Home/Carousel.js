import React from "react";
import Carousel1 from '../../../Assets/carousel1.png';
import Carousel2 from '../../../Assets/carousel2.png';
import Carousel3 from '../../../Assets/carousel3.png';

const Carousel = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <img src={Carousel1} alt='bike' className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={Carousel2} alt='bike' className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={Carousel3} alt='bike' className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Carousel;

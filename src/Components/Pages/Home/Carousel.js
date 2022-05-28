import React from "react";
import Carousel1 from '../../../Assets/carousel1.png';
import Carousel2 from '../../../Assets/carousel2.png';
import Carousel3 from '../../../Assets/carousel3.png';

const Carousel = () => {
  return (
    <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
  <img src={Carousel1} alt='bike' class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
  <img src={Carousel2} alt='bike' class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={Carousel3} alt='bike' class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Carousel;

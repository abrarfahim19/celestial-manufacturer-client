import React from 'react';
import Carousel from './Carousel'
import Products from './Products';
import ShowReview from './ShowReview';
import Stat from './Stat';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <h2>This is Home</h2>
            <i class="fa-solid fa-microchip text-5xl text-primary"></i>
            <Products></Products>
            <Stat></Stat>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;
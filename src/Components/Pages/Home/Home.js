import React from 'react';
import Carousel from './Carousel'
import NewestTools from './NewestTools';
import Products from './Products';
import SetUpMeeting from './SetUpMeeting';
import ShowReview from './ShowReview';
import Stat from './Stat';
const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <SetUpMeeting></SetUpMeeting>
            <NewestTools></NewestTools>
            <Stat></Stat>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;
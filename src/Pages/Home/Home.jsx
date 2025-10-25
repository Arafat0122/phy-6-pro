import React from 'react';
import Hero from '../../Components/HomePages/Hero';
import Courses from '../../Components/HomePages/Courses';
import Common from '../../Components/HomePages/Common';

const Home = () => {
    return (
        <div className=''>
           <Hero/>
           <Common/>
           <Courses/>
        </div>
    );
};

export default Home;
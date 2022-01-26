import React from 'react';
import AppBar from '../AppBar/AppBar'
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
const Home = () => {
    return (
        <div>
           <AppBar></AppBar>
       
           <Slider></Slider>
           {/* <Services></Services> */}
           <Blog></Blog>
           
        </div>
    );
};

export default Home;
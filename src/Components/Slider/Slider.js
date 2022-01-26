
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from '@mui/material';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./Slider.css"

import SwiperCore, {
    EffectFade, Navigation, Autoplay
  } from 'swiper';
  import { HashLink } from 'react-router-hash-link';
  SwiperCore.use([EffectFade, Navigation, Autoplay]);
//   export { banner1, banner2, banner3, banner4 }
  const styles = {
    primary: {
      background: 'linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)',
      border: 0,
      borderRadius: '30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: "auto",
      marginRight: "5px"
    },
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: '30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginLeft: '5px',
      textDecoration:'none'
    },
  };
const Slider = () => {
    return (
        <div className='banner'>
        <Swiper autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }} spaceBetween={30} effect={'fade'} loop={true} navigation={true} pagination={{
          "clickable": true
        }} className="mySwiper">
          <SwiperSlide className='overlay'>
            <img style={{ width: "100%" }} src="https://i.ibb.co/HY9YRyy/sun-tour-1.jpg" alt='' />
            <div className='slider-text'>
              <h1>Get a Great Refreshment By Visiting <br /> <span>The Sun Tour</span></h1>
              {/* <div style={{ marginTop: "20px" }} className="hero-btn">
                <HashLink to='/home#services'>
                  <Button style={styles.primary} variant="contained">Book Now</Button>
                </HashLink>
                <HashLink to='/home#contact'>
                  <Button style={styles.root} variant="contained">Contact</Button>
                </HashLink>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className='overlay'>
            <img style={{ width: "100%" }} src="https://i.ibb.co/pQTm0Rs/sun-tour-2.jpg" alt='' />
            <div className='slider-text'>
              <h1>Our client eticfaction is Our <br /> <span>Achivement</span></h1>
              {/* <div style={{ marginTop: "20px" }} className="hero-btn">
                <HashLink to='/home#contact'>
                  <Button style={styles.root} variant="contained">Contact</Button>
                </HashLink>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className='overlay'>
            <img style={{ width: "100%" }} src="https://i.ibb.co/3vwMC50/sun-tour-3.jpg" alt='' />
            <div className='slider-text'>
              <h1>Get a Great Refreshment By Visiting <br /> <span>The Sun Tour</span></h1>
              {/* <div style={{ marginTop: "20px" }} className="hero-btn">
                <HashLink to='/home#services'>
                  <Button style={styles.primary} variant="contained">Book Now</Button>
                </HashLink>
                <HashLink to='/home#contact'>
                  <Button style={styles.root} variant="contained">Contact</Button>
                </HashLink>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className='overlay'>
            <img style={{ width: "100%" }} src="https://i.ibb.co/cDF6L3t/sun-tour-4.jpg" alt='' />
            <div className='slider-text'>
              <h1>Our client eticfaction is Our <br /> <span>Achivement</span></h1>
              {/* <div style={{ marginTop: "20px" }} className="hero-btn">
                <HashLink to='/home#contact'>
                  <Button style={styles.root} variant="contained">Contact</Button>
                </HashLink>
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;
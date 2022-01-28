import React from "react";
import Slider from "../Slider/Slider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Review from "../Reviews/Reviews";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider></Slider>
      <Services />
      <Review></Review>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

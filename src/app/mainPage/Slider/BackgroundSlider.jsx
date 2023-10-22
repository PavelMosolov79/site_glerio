import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BackgroundSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 30,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: false,
    };
  
    return (
      <div className="background-slider" style={{width: '100%'}}>
        <Slider {...settings}>
        <div className="background-slide">
            <img src='/Maximum-car-dealership/car_dealership_1.png' style={{width: '100%', height: '92.5vh', objectFit: 'cover'}}/>
        </div>
        <div className="background-slide" >
            <img src='/TC_Dynai.jpg' style={{width: '100%', height: '92.5vh', objectFit: 'cover'}}/>
        </div>
        <div className="background-slide" >
            <img src='/cottage_27.10.2020.jpg' style={{width: '100%', height: '92.5vh', objectFit: 'cover'}}/>
        </div>
        </Slider>
      </div>
    );
  };
  
  export default BackgroundSlider;
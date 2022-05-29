import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
  let settings = {
    dot:true,
    Infinity:true,
    speed: 500,
    slideToShow:3,
    slideToScroll:1,
    cssEase:"linear"
  }
  return(
    <Slider {...settings}>
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src=""/>
            </div>
            <ul className='social-icons'>
              <li><a href=''></a><i className='fa fa-instagram'></i></li>
              <li><a href=''></a><i className='fa fa-github'></i></li>
              <li><a href=''></a><i className='fa fa-linkedin'></i></li>
            </ul>
        </div>
        
      </div>
      
    </Slider>
  )
}

export default ImageSlider

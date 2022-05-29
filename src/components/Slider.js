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
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/construcao.jpg?raw=true" alt='construcao'/>
            </div>
            <ul className='social-icons'>
              <li><a href=''></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            {/* <div className='details'>
              <h2>Construção<spam class='job-title'>Landing Pages para Construção</spam></h2>
            </div> */}
        </div>
        
      </div>
      
    </Slider>
  )
}

export default ImageSlider

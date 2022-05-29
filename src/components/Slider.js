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
      {/* {card 1} */}
      
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/construcao.jpg?raw=true" alt='construcao'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Construção</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 2} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/cosmeticos.jpg?raw=true" alt='cosmeticos'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Cosméticos</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 3} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/hortifruti.jpg?raw=true" alt='hortifruti'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Hortifruti</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 4} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/mercearia.jpg?raw=true" alt='hortifruti'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Mercearias</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 5} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/roupas.jpg?raw=true" alt='roupas'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Roupas</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 6} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/sapatos.jpg?raw=true" alt='sapatos'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Sapatos</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 7} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/livros.jpg?raw=true" alt='livros'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Livros</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 8} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/sapatos.jpg?raw=true" alt='sapatos'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Sapatos</spam></h2>
            </div>
        </div>
        
      </div>
      {/* {card 7} */}
      <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image'>
              <img src="https://github.com/ElaineMoreira/sales_elaine/blob/main/src/images/manicure.jpg?raw=true" alt='livros'/>
            </div>
            <ul className='social-icons'>
              <li><a href='#'></a><i className='fa fa-instagram'></i></li>
              <li><a href='#'></a><i className='fa fa-github'></i></li>
              <li><a href='#'></a><i className='fa fa-linkedin'></i></li>
            </ul>
            <div className='details'>
              <h2><spam class='job-title'>Pages para Manicure</spam></h2>
            </div>
        </div>
        
      </div>
      
    </Slider>
  )
}

export default ImageSlider

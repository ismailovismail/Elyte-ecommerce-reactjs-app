import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainSlider = () => {
    const {t}=useTranslation()
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000

      };
      
  return (
    <>
     <Slider {...settings} >
        {
        t("mainslider",{returnObjects:true}).map((fd)=>{
            return <div className={`image main-slider`}>
               <div className="slide-content">
                <div className="container-fluid">
                <div className="content">
                <h1 data-aos='fade-up' data-aos-duration='3000' >{fd.title}</h1>
                <div className="text">
                <p data-aos='fade-up' data-aos-duration='3000' >{fd.text}</p>
                  <Link data-aos='fade-up' data-aos-duration='3000'  className='btn ' to={`collection/${fd.type}`}>{t("buy")}</Link>
                </div>
                </div>
                </div>
               </div>
           <img   src={fd.image} alt="" style={{width:"100%",height:"100%"}}  />
            </div>
        })
        }
     </Slider>
   
    </>
  )
}

export default MainSlider
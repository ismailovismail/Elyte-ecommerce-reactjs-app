import React from 'react'
import Slider from 'react-slick'
import brands from '../data/BrandsSlider';

const Brands = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true
        }
      }
    ]

  };
  return (
    <>

      <Slider  {...settings}>
        {
          brands.map((fd) => {
            return <img className='mb-2' width={80} height={80} src={fd.img} alt="" />
          })
        }
      </Slider>


    </>
  )
}

export default Brands
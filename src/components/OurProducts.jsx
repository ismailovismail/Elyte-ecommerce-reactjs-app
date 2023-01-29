import { t } from 'i18next'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import products from '../data/ProductsData'
import { useContext } from 'react'
import { MainContext } from '../context'
const OurProducts = () => {
    const [data, setData] = useState(products.filter((fd) => fd.status === "New"))
    const [active, setActive] = useState("1")
    const {mode}=useContext(MainContext)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding:"10px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }

            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }

            }
        ]
    };
    console.log(active);
    const filteringProducts = (status) => {
        const result = products.filter((fd) => fd.status === status)
        setData(result)
    }
    return (
        <>
            <div className="container-fluid">
                <div className="head d-flex flex-column gap-2">
                    <div className="title mt-3 ">
                        <h1 className={`text-center ${mode === 'dark' ? "text-white" : " "  } `}>{t("ourproducts")}</h1>
                    </div>
                    <div className="buttons d-flex mb-2 gap-3 justify-content-center">
                        <div className={active === "1" ? " filter activebtn" : undefined}>
                            <button id='1' className={`btn ${mode === 'dark' ? "text-white" : "" } `} onClick={(e) => {
                                setActive(e.target.id)
                                filteringProducts("New")
                            }} >{t("newproductbtn")}</button>
                            <div className="line"></div>
                        </div>
                        <div className={active === "2" ? "filter activebtn" : undefined}>
                            <button id='2' className={`btn ${mode === 'dark' ? "text-white" : "" } `} onClick={(e) => {
                                setActive(e.target.id)
                                filteringProducts("Feature")
                            }} >{t("featureproductbtn")}</button>
                            <div className="line"></div>
                        </div>
                        <div className={active === "3" ? "filter activebtn" : undefined}>
                            <button id='3' className={`btn ${mode === 'dark' ? "text-white" : "" } `} onClick={(e) => {
                                setActive(e.target.id)
                                filteringProducts("Best")
                            }} >{t("bestproductbtn")}</button>
                            <div className="line"></div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="products-slider">
                    <Slider {...settings} >
                
                        {
                            data.map((fd) => {
                                return <div key={fd.id} data-aos='fade-up' data-aos-duration='3000' className={`card mx-2 d-flex justify-content-center p-2  ${mode === 'dark' ? "bg-secondary" : ""  } `}>
                                    <div className="row d-flex align-items-center">
                                        <div className="image col-6">
                                            <div className="image1">
                                                <h1 className={`status bg-dark text-white mx-1 mt-1 p-1 rounded`}>{fd.status}</h1>
                                                <img className='img-fluid rounded-start' width={200} src={fd.image1} alt="" />
                                            </div>
                                            <div className="image2">
                                                <img className='img-fluid rounded-start' src={fd.image2} width={200} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body d-flex  flex-column gap-2 col-6">
                                            <div className="title">
                                                <Link to={`products/${fd.type}/${fd.name}`} ><h1 className={` ${mode === 'dark' ? "text-white" : "" } `}>{fd.name}</h1></Link>
                                            </div>
                                            <div className="price d-flex gap-3">
                                                <h1  className={`${mode === 'dark' ? "text-white" : "" }`} >${fd.price}</h1>
                                                <del className={`${mode === 'dark' ? "text-white" : "" }`}  >${fd.delprice}</del>
                                            </div>
                                            <div className="review">
                                                {
                                                    fd.review.map((a) => {
                                                        return a
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            })
                        }
                    
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default OurProducts
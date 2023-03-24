import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick'
import { MainContext } from '../context';

const NewsLetter = () => {
    const { t } = useTranslation()
    const { mode } = useContext(MainContext)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="slider-main col-lg-6 ">
                        <Slider {...settings}>
                            {
                                t("newsletter", { returnObjects: true }).map((fd) => {
                                    return <div className="slider d-flex flex-column gap-4">
                                        <div className="count">
                                            <h1 className={`text-center ${mode === 'dark' ? "text-white" : ""} `} >{fd.count}</h1>
                                        </div>
                                        <div className="text d-flex justify-content-center">
                                            <p className={`text-center ${mode === 'dark' ? "text-white" : ""} `}>{fd.text}</p>
                                        </div>
                                        <div className="image d-flex justify-content-center">
                                            <img src={fd.image} alt="" />
                                        </div>
                                        <div className="title">
                                            <h1 className={`text-center ${mode === 'dark' ? "text-white" : ""} `}>{fd.title}</h1>
                                        </div>
                                        <div className="work">
                                            <h1 className={`text-center ${mode === 'dark' ? "text-white" : ""} `} >{fd.work}</h1>
                                        </div>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                    <div className="subscribe col-lg-6 bg-dark d-flex flex-column ">
                        <div className="letter d-flex justify-content-center ">
                            <i className=" bi bi-envelope-open"></i>
                        </div>
                        <div className="title">
                            <h1 className=' text-center text-white'>{t("newsletter2.newsletter")}</h1>
                        </div>
                        <div className="text">
                            <p className=' text-center' >{t("newsletter2.subscribe")}</p>
                        </div>
                        <form>
                            <div className="email d-flex justify-content-center ">
                                <input placeholder={t("newsletter2.email")} required type="email" name="" id="" />
                            </div>
                            <div className="subscribe-btn d-flex justify-content-center ">
                                <button className='mt-3 btn'>{t("newsletter2.subscribebtn")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter
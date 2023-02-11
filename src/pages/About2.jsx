import React, { useEffect, useState } from 'react'
import about1 from '../assets/img/about21.webp'
import about22 from '../assets/img/about22.webp'
import about23 from '../assets/img/about23.webp'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'
import { MainContext } from '../context'
import { useContext } from 'react'
const About2 = () => {
    const [counterOn, setCounterOn] = useState(false)
    const { t } = useTranslation()
    const {mode}=useContext(MainContext)
    useEffect(()=>{
        document.title='About Us 2 | Elyte Ecommerce'
    },[])
    return (
        <>
            <section className={`aboutus-2 ${mode === "dark" ? "bg-secondary" : ""} `} >
                <div className="container-fluid">
                <div className="title row py-5 d-flex flex-column justify-content-center align-items-center gap-3 ">
                    <h1 className={`text-center fs-1 ${mode === 'dark' ? "text-white" : "" } `}>{t('about.aboutus')}</h1>
                    <p className={`lh-base col-xl-4 text-center text-secondary ${mode === 'dark' ? "text-white" : ""  } `}>
                        {t('about.lorem')}
                    </p>
                </div>
                <div className="our-company-sec mt-5 mb-5 ">
                    <div className="row d-flex justify-content-center gap-3 align-items-center">
                        <img className=' col-md-5  col-xl-5 rounded' src={about1} alt="" />
                        <div className=" ms-1 text col-md-5 col-xl-5 d-flex flex-column gap-3 ">
                            <h1 className={`fw-bold fs-4 ${mode === 'dark' ? "text-white" : "" } `}>{t('about.company')}</h1>
                            <p className={`lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `} >
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="our-mission-sec mb-5">
                    <div className="row d-flex justify-content-center gap-3 align-items-center">
                        <div className="ms-1 text col-md-5 col-xl-5 d-flex flex-column gap-3 ">
                            <h1 className={`fw-bold fs-4 ${mode === 'dark'? "text-white" : "" } `}>{t('about.ourmission')}</h1>
                            <p className={`lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="image position-relative col-md-5 col-xl-5 d-flex justify-content-center align-items-center ">

                            <div className='buton-launch position-absolute '>
                                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fs-1 text-white border-0 outline-none bi bi-play-circle-fill"></i>
                                </button>

                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog bg-transparent modal-dialog-centered">


                                        <iframe width="700" height="393" src="https://www.youtube.com/embed/OQRRlD3Ei5k" title="Best Multipurpose Premium Shopify Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                    </div>
                                </div>
                            </div>
                            <img className='img-fluid' src={about22} alt="" />
                        </div>
                    </div>
                </div>
                <div className="our-vision-sec mb-5">
                    <div className="row d-flex justify-content-center gap-3 align-items-center">
                        <img src={about23} className='col-md-5 col-xl-5' alt="" />
                        <div className="ms-1 text col-md-5 d-flex flex-column gap-3 col-xl-5">
                            <h1 className={`fs-3 fw-bold ${mode === 'dark' ? "text-white" : "" } `}>{t('about.ourvision')}</h1>
                            <p className={`lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `}>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="counter-cards d-flex justify-content-center mb-5">
                    <div style={{ width: "85%" }} className="card-group">
                        <div className="card">
                            <div className="card-body gap-4 d-flex flex-column justify-content-center align-items-center ">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                                    <h1 className='fs-3 fw-bold text-warning'>
                                        {
                                            counterOn && <CountUp start={0} end={10} duration={2} delay={0} ></CountUp>
                                        }+
                                    </h1>
                                </ScrollTrigger>
                                <div className="icon">
                                    <i className=" fs-1 bi bi-briefcase"></i>
                                </div>
                                <h1 className=' fs-3  text-secondary' >
                                    {t('about.years')}
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body gap-4 d-flex flex-column justify-content-center align-items-center ">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                                    <h1 className='fs-3 fw-bold text-warning'>
                                        {
                                            counterOn && <CountUp start={0} end={100} duration={2} delay={0} ></CountUp>
                                        }+
                                    </h1>
                                </ScrollTrigger>
                                <div className="icon">
                                    <i className=" fs-1  bi bi-people"></i>
                                </div>
                                <h1 className=' fs-3  text-secondary' >
                                    {t("about.clients")}
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body gap-4 d-flex flex-column justify-content-center align-items-center">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                                    <h1 className='fs-3 fw-bold text-warning'>
                                        {
                                            counterOn && <CountUp start={0} end={50} duration={2} delay={0} ></CountUp>
                                        }+
                                    </h1>
                                </ScrollTrigger>
                                <div className="icon">
                                    <i class=" fs-1 bi bi-shop"></i>
                                </div>
                                <h1 className=' fs-3  text-secondary' >
                                    {t("about.shops")}
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body gap-4 d-flex flex-column justify-content-center align-items-center">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                                    <h1 className='fs-3 fw-bold text-warning'>
                                        {
                                            counterOn && <CountUp start={0} end={17} duration={2} delay={0} ></CountUp>
                                        }M+
                                    </h1>
                                </ScrollTrigger>
                                <div className="icon">
                                    <i class=" fs-1 bi bi-tags"></i>
                                </div>
                                <h1 className=' fs-3  text-secondary' >
                                    {t('about.sales')}
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="our-team-sec">
                  
                    <div className="title row gap-2 d-flex justify-content-center align-items-center flex-column">
                        <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : "" } `}>{t('about.ourteam')}</h1>
                        <p  className={`lh-base text-center col-xl-4 text-secondary ${mode === 'dark' ? "text-white" : "" } `}>
                          {t('about.lorem')}
                        </p>
                    </div>
                    <div className="team-cards py-4 ">
                        <div className="container-fluid">
                        <div className="row d-flex justify-content-center gap-3">
                            {
                                t('about-teamcards', { returnObjects: true }).map((item) => {
                                    return  <div className="card border-0 p-1 mb-3" style={{ maxWidth: 600 }}>
                                        <div className="row d-flex justify-content-center align-items-center g-0">
                                            <div className=" col-9 col-md-4">
                                                <img src={item.image} className="img-fluid" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h1 className="card-title fs-4">{item.title}</h1>
                                                    <h5 className="card-title">{item.job}</h5>
                                                    <hr />
                                                    <p className='text-secondary lh-base card-text'>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    

                                })
                            }
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
                </div>
            </section>
        </>
    )
}

export default About2
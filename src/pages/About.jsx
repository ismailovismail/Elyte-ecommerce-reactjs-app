import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ourCompany from '../assets/img/our-company.webp'
import teamWork from '../assets/img/Team-work.webp'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { MainContext } from '../context'
const About = () => {
  const [counterOn, setCounterOn] = useState(false)
  const { t } = useTranslation()
  const {mode}=useContext(MainContext)
  useEffect(()=>{
    document.title='About Us | Elyte Ecommerce'
  },[])
  return (
    <>
      <section className={`about-page ${mode === 'dark' ? "bg-secondary" : "" } `}>
        <div className="container-sec">
          <div className="container-fluid">
          <div className="title row py-5 d-flex justify-content-center flex-column align-items-center">
          
            <h1 className={`text-center fs-1 mb-2 ${mode === 'dark' ? "text-white" : ""  } `}>{t("about.aboutus")}</h1>
            <p  className={`text-center col-xl-4 ${mode === 'dark' ? "text-white" : ""  } `}>{t('about.lorem')}</p>

          </div>
          </div>
           <div className="container-fluid">
          <div className="our-company mt-4">
            <div className="row d-flex justify-content-center gap-5">
              <img className='img-fluid col-md-4 col-xl-4' src={ourCompany} alt="" />
              <div className="our-company-text col-md-5 col-xl-6 gap-2  d-flex flex-column justify-content-center ">
                <h1 className={`fw-bold fs-4 ${mode === 'dark' ? "text-white" : "" } `}>{t('about.company')}</h1>
                <p className={`text-secondary fs-5 ${mode === 'dark' ? "text-white" : "" } `}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="team-work mt-5">
            <div className="row d-flex justify-content-center gap-5 ">
              <div className="team-work-text col-md-5 col-xl-6 d-flex gap-2 justify-content-center flex-column">
                <h1 className={`fw-bold fs-4 ${mode === 'dark' ? "text-white" : "" } `}>{t('about.teamwork')}</h1>
                <p className={`text-secondary fs-5 ${mode === 'dark' ? "text-white" : ""  } `}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                </p>
              </div>
              <img className=' img-fluid col-md-4 col-xl-4' src={teamWork} alt="" />
            </div>
          </div>
          </div>
          <div className={` our-mission-idea ${mode === 'dark' ? "bg-secondary" : "bg-light" } `}>
            <div className="container py-3 ">
              <div className="row d-flex align-items-center g-12">
                {
                  t('about-ourcards', { returnObjects: true }).map((item) => {
                    return <div className=" py-5  mt-3 our-card gap-2 col-md-4 col-xl-4 d-flex flex-column justify-content-center align-items-center">
                      <img src={item.image} alt="" />
                      <h1 className={`title text-center fw-bold fs-4 ${mode === 'dark' ? "text-white" : "" } `}>{item.title}</h1>
                      <p style={{ fontSize: "15px" }} className={`text-center fs-6 lh-base text-secondary ${mode === 'dark' ? "text-white" : ""  } `}>{item.text}</p>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
          <div className="counters mb-5 mt-5 py-5">

            <div className="row d-flex justify-content-center gap-5">

              <div className="counter-first col-12 col-sm-12 col-md-6 col-xl-3">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                  <div className="counter-body gap-2 d-flex flex-column justify-content-center align-items-center ">
                    <h1 className='fs-1 d-flex justify-content-center border border-warning border-3 p-2  text-warning ' >
                      {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />} +
                    </h1>
                    <h1 className='fs-3 '>
                      {t('about.years')}
                    </h1>
                  </div>
                </ScrollTrigger>
                <div className="icon">
                  <i class="bi bi-briefcase"></i>
                </div>
              </div>


              <div className="counter-second col-12 col-sm-12 col-md-6 col-xl-3">
                <div className="counter-body gap-2 d-flex flex-column justify-content-center align-items-center ">
                  <h1 className='fs-1 d-flex justify-content-center border border-warning border-3 p-2  text-warning ' >
                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />} +
                  </h1>
                  <h1 className='fs-3 '>
                    {t('about.clients')}
                  </h1>
                </div>
                <div className="icon">
                  <i class="bi bi-people"></i>
                </div>
              </div>


              <div className="counter-third col-12 col-sm-12 col-md-6 col-xl-3">
                <div className="counter-body gap-2 d-flex flex-column justify-content-center align-items-center ">
                  <h1 className='fs-1 d-flex justify-content-center border border-warning border-3 p-2  text-warning ' >
                    {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />} +
                  </h1>
                  <h1 className='fs-3 '>
                  {t('about.shops')}
                  </h1>
                </div>
                <div className="icon">
                  <i class="bi bi-shop"></i>
                </div>
              </div>


              <div className="counter-four col-12 col-sm-12 col-md-6 col-xl-3">
                <div className="counter-body gap-2 d-flex flex-column justify-content-center align-items-center ">
                  <h1 className='fs-1 d-flex justify-content-center border border-warning border-3 p-2  text-warning ' >
                    {counterOn && <CountUp start={0} end={17} duration={2} delay={0} />} M+
                  </h1>
                  <h1 className='fs-3 '>
                    {t('about.sales')}
                  </h1>
                </div>
                <div className="icon">
                  <i class="bi bi-tags"></i>
                </div>
              </div>
            </div>


          </div>
          <hr />

          <div className="our-team-sec mt-5">
            <div className="container-fluid">
            <div className="title row gap-3 d-flex justify-content-center align-items-center flex-column ">
              <h1 className={`fs-2 text-center ${mode === 'dark' ? "text-white" : "" } `}>{t('about.ourteam')}</h1>
              <p  className={`col-xl-4 text-secondary text-center ${mode === 'dark' ? "text-white" : "" } `}>
                {t('about.lorem')} 
              </p> 
            </div>
            </div>
            <div className="cards py-4 ">
             <div className="row d-flex justify-content-center gap-4 ">
              {
                t('about-teamcards', { returnObjects: true }).map((item) => {
                  return <div className="card border-0 p-0 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 " style={{ width: '18rem' }}>
                    <img src={item.image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                      <h1 className="card-title fw-bold fs-4">{item.title}</h1>
                       <h5 className='card-title'>{item.job}</h5> 
                    </div>
                  </div>

                })
              }
               </div> 
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
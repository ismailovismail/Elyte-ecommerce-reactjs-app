import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import airpods from '../assets/img/about-us-3.webp'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
import { MainContext } from '../context'
const About3 = () => {
  const { t } = useTranslation()
  const [counterOn, setCounterOn] = useState(false)
  const { mode } = useContext(MainContext)
  useEffect(() => {
    document.title = 'About Us 3 | Elyte Ecommerce'
  }, [])
  return (
    <>
      <section className={`aboutus-3 ${mode === 'dark' ? "bg-secondary" : ""} `}>
        <div className="container-fluid">
          <div className="title row py-5 d-flex justify-content-center align-items-center flex-column gap-3">
            <h1 className={`text-center fs-1 ${mode === 'dark' ? "text-white" : ""} `}>{t('about.aboutus')}</h1>
            <p className={`col-xl-4 lh-base text-center text-secondary ${mode === 'dark' ? "text-white" : ""} `}>
              {t('about.lorem')}
            </p>
          </div>
          <div className="image mt-5 mb-5">
            <div className="row d-flex justify-content-center">
              <img src={airpods} className='img-fluid col-xl-11' alt="" />
            </div>
          </div>
          <div className="cards mb-5 py-5 ">
            <div className="row d-flex justify-content-center gap-3 ">
              {
                t('about3', { returnObjects: true }).map((item) => {
                  return <div className={`card border-0 d-flex p-1 flex-column gap-2  col-xl-5 ${mode === 'dark' ? "bg-secondary" : ""} `}>
                    <div className="image d-flex justify-content-center ">
                      <img width={70} src={item.image} alt="" />
                    </div>
                    <h1 className={`text-center fs-4 title ${mode === 'dark' ? "text-white" : ""} `}>
                      {item.title}
                    </h1>
                    <p className={`lh-base text-secondary text-center text ${mode === 'dark' ? "text-white" : ""} `}>
                      {item.text}
                    </p>
                  </div>
                })
              }
            </div>
          </div>
          <div className="counters bg-light mb-5 mt-5 py-5">

            <div className="row d-flex justify-content-center py-5 gap-5">

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
                  <img src="https://cdn.shopify.com/s/files/1/0550/8182/8594/files/ribbon-design_30x30_crop_center.png?v=1633946728" alt="" />
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
                  <img src="https://cdn.shopify.com/s/files/1/0550/8182/8594/files/partner_30x30_crop_center.png?v=1633946728" alt="" />
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
                  <img src="https://cdn.shopify.com/s/files/1/0550/8182/8594/files/showroom_30x30_crop_center.png?v=1633946728" alt="" />
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
                  <img src="https://cdn.shopify.com/s/files/1/0550/8182/8594/files/sale_30x30_crop_center.png?v=1633946728" alt="" />
                </div>
              </div>
            </div>


          </div>
          <div className="our-team-sec mt-5">
            <div className="title row gap-3 d-flex justify-content-center align-items-center flex-column ">
              <h1 className={`fs-2 text-center ${mode === 'dark' ? "text-white" : ""} `}>{t('about.ourteam')}</h1>
              <p className={`text-center text-secondary col-xl-4 lh-base  fs-6 ${mode === 'dark' ? "text-white" : ""} `}>
                {t('about.lorem')}
              </p>
            </div>
            <div className="cards mt-5 py-2 ">
              <div className="row d-flex justify-content-center gap-4 ">
                {
                  t('about-teamcards', { returnObjects: true }).map((item) => {
                    return <div className="card border-0 p-0 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 " style={{ width: '20rem' }}>
                      <img src={item.image} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <h1 className="card-title fw-bold fs-4">{item.title}</h1>
                        <h5 className='card-title'>{item.job}</h5>
                        <hr />
                        <p className='fs-6 lh-base text-secondary '>
                          {item.text}
                        </p>
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

export default About3
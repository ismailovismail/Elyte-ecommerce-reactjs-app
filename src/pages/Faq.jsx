import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import faq from '../assets/img/faq.webp'
import { MainContext } from '../context'
const Faq = () => {
  const { t } = useTranslation()
  const {mode}=useContext(MainContext)
  return (
    <>
      <section className={`faq-sec ${mode === 'dark' ? "bg-secondary" : "" } `}>

        <div className="title py-5">
          <div className="container-fluid">
          <div className="row d-flex justify-content-center gap-2">
            <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : "" } `}>{t('faq.title')}</h1>
            <p className={`text-center col-xl-4 text-secondary lh-base ${mode === 'dark' ? "text-white" : " " } `}>
              {t('faq.title2')}
            </p>
          </div>
          </div>
        </div>
        <div className="image-accordion mt-5 mb-5 ">
          <div className="row d-flex justify-content-center gap-3 align-items-center ">
            <img className='col-xl-5' src={faq} alt="" />
            <div className="accordion-sec col-xl-5">
              <div className={`accordion accordion-flush`} id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     {t('faq.whatlorem')}
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <ul className='d-flex p-1 flex-column gap-2'>
                        <li>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.s
                        </li>
                        <li>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </li>
                        <li>
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                     {t('faq.whyuse')}                     
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <ul className='d-flex p-1 flex-column gap-2' >
                        <li>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </li>
                        <li>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      {t('faq.where')}?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <ul className='p-1'>
                        <li>
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      {t('faq.where')}?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      <ul className='p-1' >
                        <li>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={`help-support  mb-3 py-4 ${mode === 'dark' ? "bg-secondary" : "bg-light" } `}>
          <div className="row py-5 d-flex justify-content-center justify-content-evenly">
            {
              t("faqCards", { returnObjects: true }).map((item) => {
                return <div className="card bg-transparent border-0" style={{ width: "25rem" }}>
                  <div className="icon-help d-flex justify-content-center">
                    <i className={`${item.icon}  bg-light p-4 rounded-circle border fs-1 `}></i>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center ">
                    <h1 className={`card-title text-center ${mode === 'dark' ? "text-white" : "" } `}>{item.title}</h1>
                    <p className={`card-text text-center lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `}>{item.text}</p>
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div className="policy-sec mt-5">
          <div className="container-fluid">
          <div className="title row d-flex justify-content-center mb-4 gap-3">
            <h1 className={`text-center fs-2 fw-bold ${mode === 'dark' ? "text-white"  : "" } `}>{t('faq.return')}</h1>
            <p className={`text-center text-secondary lh-base col-xl-4 ${mode === 'dark' ? "text-white" : "" } `}>
              {t('faq.lorem')}
            </p>
          </div>
          <div className="accordions  py-5 ">
            <div className="container-fluid" style={{width:"88%"}}>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {t('faq.whatlorem')}
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul className='p-2 d-flex flex-column gap-2'>
                        <li>
                          {t('faq.whatlorem2')}
                        </li>
                        <li>
                          {t('faq.itwas')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      {t('faq.whyuse')}
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul className='d-flex p-2 flex-column gap-2' >
                        <li>
                          {t('faq.various')}
                        </li>
                        <li>
                          {t('faq.many')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      {t('faq.where')}
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul className='d-flex p-2 flex-column gap-2' > 
                        <li>
                          {t('faq.uses')}
                        </li>
                        <li>
                          {t('faq.generated')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Faq
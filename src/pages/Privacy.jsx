import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import privacy from '../assets/img/privacy.webp'
import { MainContext } from '../context'
import privacyData from '../data/PrivacyData'
const Privacy = () => {
    const {t}=useTranslation()
    const {mode}=useContext(MainContext)
    useEffect(()=>{
        document.title='Privacy | Elyte Ecommerce'
    },[])
  return (
    <>
    <section className={`${mode === 'dark' ? "bg-secondary" : "" }`}>
        <div className="title py-5 mb-5">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center gap-3 ">
                    <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : "" } `}>{t('privacy.title')}</h1>
                    <p className={`text-center col-xl-4 lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `}>
                    {t('privacy.lorem')}
                    </p>
                </div>
            </div>
        </div>
        <div className="image-sec mt-2  mb-5">
            <div  className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center gap-5">
                <div className="text col-md-5 col-xl-5">
                    <ul className='privacy-list d-flex flex-column gap-3'>
                        <li className={`${mode === 'dark' ? "text-white" : ""}`} >
                        {t('privacy.therelorem')}
                        <hr />
                        </li>
                        <li className={`${mode === 'dark' ? "text-white" : "" }`} >
                         {t('privacy.itwas')}
                        <hr />
                        </li>
                        <li className={`${mode === 'dark' ? "text-white" : "" }`}>
                        {t('privacy.sed')}
                        <hr />
                        </li>
                        <li className={`${mode === 'dark' ? "text-white" : "" }`}>
                        {t('privacy.random')}
                        <hr />
                        </li>
                        <li className={`${mode === 'dark' ? "text-white" : "" }`}>
                          {t('privacy.temporibus')}
                        <hr />
                        </li>
                    </ul>
                </div>
                <div className="image col-md-6 col-xl-5 ">
                    <img style={{width:"100%"}} src={privacy} alt="" />
                </div>
            </div>
            </div>
        </div>

        <div className={`liability-sec  py-5 mb-5 ${mode === 'dark' ? "bg-secondary" : "bg-light" } `}>
            <div className="container-fluid">
                <div className="row py-3 d-flex gap-5 justify-content-center align-items-center ">
                       <ul className="liability-list col-md-5  col-xl-5 d-flex flex-column gap-4">
                        <li className={`fs-4 p-3 rounded ${mode === 'dark' ? "bg-secondary text-white" : "bg-white"} `} >
                            <i className="bi bi-shield-check"></i> {t('privacy.secure')}
                        </li>
                        <li className={`fs-4 p-3 ${mode === 'dark' ? "text-white" : "" } `}> 
                        <i class="bi bi-wallet2"></i> {t('privacy.money')}
                        </li>
                        <li className={`fs-4 p-3  rounded ${mode === 'dark' ? "bg-secondary text-white" : "bg-white" } `}> 
                        <i class="bi bi-eye-slash"></i> {t('privacy.hidden')}
                        </li>
                        <li className={`fs-4 p-3 ${mode === 'dark' ? "text-white" : "" } `}>
                        <i class="bi bi-person-check"></i> {t('privacy.costumer')}
                        </li>
                        <li className={`fs-4 p-3 rounded ${mode === 'dark' ? "bg-secondary text-white " : "bg-white" } `}>
                        <i class="bi bi-graph-up"></i> {t('privacy.market')}
                        </li>
                       </ul>
                       <div className="text-liability col-md-5 col-xl-5">
                        <h1 className={`fs-4 ${mode === 'dark' ? "text-white" : "" } `}>{t('privacy.liability')}</h1>
                        <hr />
                        <ul className='d-flex flex-column gap-2'>
                            <li className={`lh-base  ${mode === 'dark' ? "text-white" : "text-secondary" } `}>
                              {t('privacy.therelorem2')}
                            </li>
                            <li className={`lh-base  ${mode === 'dark' ? "text-white" : "text-secondary" } `}>
                             {t('privacy.itwas2')}
                            </li>
                        </ul>
                       </div>
                </div>
            </div>
        </div>
        <div className="popular-methods">
            <div className="title mb-3">
                <div className="container-fluid">
                     <div className="row d-flex justify-content-center gap-3 ">
                        <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : "" } `}>{t('privacy.popular')}</h1>
                        <p className={`lh-base  text-center col-xl-4 ${mode === 'dark' ? "text-white" : "text-secondary" } `}> 
                        {t('privacy.lorem')}
                        </p>
                     </div>
                </div>
            </div>
            <div className="cards mt-3 py-4">
                <div className="container">
                <div className="row d-flex gap-3  justify-content-center ">
                    {
                        privacyData.map((item)=>{
                            return <div style={{width:"23rem"}} className={`card  p-3 col-sm-12  col-md-12  ${item.bgcolor} border-0 col-xl-4`}  >
                              <div className="icon-payment d-flex justify-content-center ">
                                {item.card}
                              </div>
                              <div className="card-body d-flex flex-column justify-content-center ">
                                <h1 className="card-title fw-bold text-center">
                                  {item.title}
                                </h1>
                                <p className=" lh-base card-text text-secondary text-center">
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

export default Privacy
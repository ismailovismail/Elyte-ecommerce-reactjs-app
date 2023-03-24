import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import terms from '../assets/img/Terms.webp'
import { MainContext } from '../context'
import { useContext } from 'react'
const Terms = () => {
    const { t } = useTranslation()
    let data = t('helpCards', { returnObjects: true })
    const { mode } = useContext(MainContext)
    useEffect(() => {
        document.title = 'Terms & condition | Elyte Ecommerce'
    }, [])
    return (
        <>
            <section className={`terms-sec ${mode === 'dark' ? "bg-secondary" : ""} `}>
                <div className="title py-5">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center gap-2 ">
                            <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : ""} `}>{t('terms.title')}</h1>
                            <p className={`text-center col-xl-4 text-secondary lh-base ${mode === 'dark' ? "text-white" : ""} `}>
                                {t('faq.lorem')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="restriction-sec mt-5 mb-5">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center gap-5 align-items-center">
                            <img src={terms} alt="" className=' col-md-5 col-xl-5 img-fluid' />
                            <div className="text-sec col-md-5 col-xl-5">
                                <h1 className={`fs-4 ${mode === 'dark' ? "text-white" : ""} `}>{t('terms.restriction')}</h1>
                                <hr />
                                <ul className='restriction-list d-flex flex-column gap-3' >
                                    <li className={`lh-base  ${mode === 'dark' ? "text-white" : "text-secondary"} `}>
                                        {t('terms.thereare')}
                                    </li>
                                    <li className={`lh-base ${mode === 'dark' ? "text-white" : "text-secondary"} `}>
                                        {t('terms.but')}
                                    </li>
                                    <li className={`lh-base  ${mode === 'dark' ? "text-white" : "text-secondary"} `}>
                                        {t("terms.nor")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`words  mb-5 py-5 ${mode === 'dark' ? "bg-secondary" : "bg-light"} `}>
                    <div className="container-fluid">
                        <div className="row py-5 d-flex justify-content-center gap-5 ">
                            {
                                t('termsWords', { returnObjects: true }).map((item) => {
                                    return <div className="word col-md-5 col-xl-5 d-flex flex-column gap-1">
                                        <h1 className={`fs-5 ${mode === 'dark' ? "text-white" : " "} `}>{item.title}</h1>
                                        <hr />
                                        <ul className='word-list'>
                                            <li className={`lh-base  ${mode === 'dark' ? "text-white" : "text-secondary"} `}>{item.text}</li>
                                        </ul>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="help-sec mt-5">
                    <div className="title mb-3 ">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center gap-2">
                                <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : ""}  `}>{t("terms.needtitle")}</h1>
                                <p className={`text-center  lh-base col-xl-4  ${mode === 'dark' ? "text-white" : "text-secondary"} `} >
                                    {t('faq.lorem')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="help-cards py-5 ">
                        <div style={{ width: "97%" }} className="container-fluid">
                            <div className="row d-flex gap-5 justify-content-center ">
                                <div className="card col-md-3 col-xl-3 p-0">
                                    <img src={data[0].image} className='card-img-top img-fluid' alt="" />
                                    <div className="card-body gap-3 d-flex flex-column justify-content-center align-items-center">
                                        <i className={`${data[0].icon} fs-2 bg-white p-3 rounded-circle `} ></i>
                                        <h1 className='fs-5 fw-bold' >{data[0].title}</h1>
                                        <h1>{data[0].text}</h1>
                                    </div>
                                </div>
                                <div className="card col-md-3 col-xl-3 p-0">
                                    <div className="card-body gap-3 d-flex flex-column justify-content-center align-items-center">
                                        <i className={`${data[1].icon} fs-2 bg-white p-3 rounded-circle `} ></i>
                                        <h1 className='fs-5 fw-bold' >{data[1].title}</h1>
                                        <h1>{data[1].text}</h1>
                                    </div>
                                    <img src={data[1].image} className='card-img-top img-fluid' alt="" />
                                </div>
                                <div className="card col-md-3 col-xl-3 p-0">
                                    <img src={data[2].image} className='card-img-top img-fluid' alt="" />
                                    <div className="card-body gap-3 d-flex flex-column justify-content-center align-items-center">
                                        <i className={`${data[2].icon} fs-2 bg-white p-3 rounded-circle `} ></i>
                                        <h1 className='fs-5 fw-bold' >{data[2].title}</h1>
                                        <h1>{data[2].text}</h1>
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

export default Terms
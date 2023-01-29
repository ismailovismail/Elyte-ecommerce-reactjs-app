import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MainContext } from '../context'

const Contact = () => {
    const { t } = useTranslation()
    const {mode}=useContext(MainContext)
    return (
        <section className={`contact-page ${mode === 'dark' ? "bg-secondary" : "" } `}>
            <div style={{ width: "90%" }} className="container-fluid">
                <div className="title py-5">
                    <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : '' } `}>
                        {
                            t("contact.get")
                        }
                    </h1>
                    <div className="row d-flex justify-content-center">
                        <p className={`text-center text-secondary col-xl-4 mt-2 lh-base ${mode === 'dark' ? "text-white" : "" } `}>
                            {
                                t('contact.get2')
                            }
                        </p>
                    </div>
                </div>
                <div className="contact-cards mt-5 mb-5">
                    <div className="row d-flex justify-content-center gap-4 ">
                        {
                            t('contactCards', { returnObjects: true }).map((item) => {
                                return <div className="card p-5  col-lg-4 border-0 " style={{ width: "26rem" }}>
                                    <div className="icon-contact d-flex justify-content-center mb-3">
                                        <i className={`${item.icon} bg-dark text-white p-4 fs-1 rounded-circle border `}></i>
                                    </div>
                                    <div className="text">
                                        <div className="row d-flex justify-content-center">
                                            <p className='text-center col-xl-8 text-secondary' >
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="contact-map mb-5">
                    <div className="google-map-area">
                        <div id="map" className="map d-flex justify-content-center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.943120902953!2d-7.963813984699448!3d37.177822679872456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab161c81fb0ff%3A0x867380c80c46b1d!2sAmendoeira%20Organics!5e0!3m2!1sen!2spt!4v1631184615272!5m2!1sen!2spt" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" /></div>
                    </div>
                </div>
                <hr />
                <div className="drop-form py-5">
                    <div className="title row d-flex justify-content-center mb-3">
                        <h1 className={`text-center fs-2 ${mode === 'dark' ? "text-white" : "" } `}>{t('contact.dropMessage')}</h1>
                        <p className={`text-center col-xl-4 mt-2 lh-base text-secondary ${mode === 'dark' ? "text-white" : "" } `}>
                         {
                            t('contact.get2')
                         }
                        </p>
                    </div>
                    <form className='d-flex justify-content-center flex-column align-items-center'>
                       <div className="row d-flex gap-2 ">
                        <div className="name-email row">
                            <div className="name d-flex flex-column col-xl-6 gap-2 ">
                            <label htmlFor="" className={`${mode === 'dark' ? "text-white" : "" }`} >{t('contact.name')}</label>
                            <input required type="text" placeholder={t('contact.name')} className='px-2 py-2 rounded' />
                         </div> 
                         <div className="email col-xl-6 d-flex flex-column gap-2">
                            <label htmlFor="" className={`${mode === 'dark' ? "text-white" : "" }`} >{t('contact.email')}</label>
                            <input required type="text" placeholder={t('contact.email')} className='px-2 py-2 rounded ' />
                         </div>
                            </div>
                         <div className="phone-number d-flex flex-column gap-2">
                            <label htmlFor="" className={`${mode === 'dark' ? "text-white" : "" }`}>{t('contact.phonenum')}</label>
                            <input required type="text" placeholder={t('contact.phonenum')} className='rounded px-2 py-2 ' />
                         </div>
                         <div className="message d-flex flex-column gap-2 ">
                            <label htmlFor="" className={`${mode === 'dark' ? "text-white" : "" }`} >{t('contact.message')}</label>
                             <textarea required name=""  placeholder={t('contact.message')} className='rounded px-2 py-2'  id="" cols="30" rows="10"></textarea>
                         </div>
                         <div className="send-btn">
                            <button className='btn btn-dark' >{t('contact.send')}</button>
                         </div>
                        </div> 
                        
                       
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact
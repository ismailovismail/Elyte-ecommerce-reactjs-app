import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { MainContext } from '../context'
import iconData from '../data/Socialmedialinks'
import { useContext } from 'react'
import { useEffect } from 'react'

const Footer = () => {
  const { t,i18n } = useTranslation()
 const {mode}=useContext(MainContext)
  const [display,setDisplay]=useState(true)
  const location=useLocation()
 const [value,setValue]=useState('en')

  useEffect(()=>{
    if (  location.pathname === '/auth') {
        setDisplay(false)
    }else if (location.pathname === '/dashboard') {
       setDisplay(false)
    }else{
      setDisplay(true)
    }
    if (value === 'en') {
      i18n.changeLanguage("en")
    }else if (value === 'az') {
      i18n.changeLanguage('az')
    }
  },[display,value])
  return (
    <>
     { display && <footer className={`footer ${mode === 'dark' ? 'bg-secondary' : "" }  `}>
        <div className="container-fluid"> 
          <div className="row gap-2">
            <div className=" col-10 col-md-7 col-lg-7 col-xl-7 col-xxl-3  part-adress">
              {
                t('adress', { returnObjects: true }).map((fd) => {
                  return <div className="list">
                    <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.title}</h1>
                    <p className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.adress}</p>
                    <h1 className={`${mode === 'dark' ? 'text-white' : "" }`} >{fd.title2}</h1>
                    <Link to='#' className={`${mode === 'dark' ? "text-white" : ""  }`} >{fd.email}</Link>
                  </div>
                })
              }
            </div>
            <div className=" col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 part-service">
              {
                t("footerservice", { returnObjects: true }).map((fd) => {
                  return <div className="list">
                    <h1 className={`${mode === 'dark' ? "text-white" : "" }`}>{fd.title}</h1>
                  </div>

                })
              }
              <ul>
                {
                  t("footerservice", { returnObjects: true }).map((fd) => {
                    return <li><Link className={`${mode === 'dark' ? "text-white" : "" }`} to={fd.href} >{fd.label}</Link></li>
                  })
                }
              </ul>
            </div>
            <div className=" col-12 col-md-7 col-lg-7 col-xl-7 col-xxl-3 part-quicklinks">
              {
                t("footerotherlinks", { returnObjects: true }).map((fd) => {
                  return <h1 className={`${mode === 'dark' ? 'text-white' : "" }`} >{fd.title}</h1>
                })
              }
              <ul>
                {
                  t("footerotherlinks", { returnObjects: true }).map((fd) => {
                    return <li><Link className={`${mode === 'dark' ? "text-white" : "" }`} to={fd.href}>{fd.label}</Link></li>
                  })
                }
              </ul>
            </div>
            <div className=" col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-2  part-help">
              {
                t("footerhelp", { returnObjects: true }).map((fd) => {
                  return <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.title}</h1>
                })
              }
              {
                t("footerhelp", { returnObjects: true }).map((fd) => {
                  return <div className="info">
                    <p className={`${mode === 'dark' ? "text-white" : ""}`}>{fd.number}</p>
                    <p className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.day}</p>
                  </div>
                })
              }
              <ul className='icons d-flex' >
                {
                  iconData.map((fd) => {
                    return <li>
                      <Link className={`${mode === 'dark' ? 'text-white' : "" }`} to={fd.href}>{fd.icon}</Link>
                    </li>
                  })
                }
              </ul>

            </div>
          </div>
        </div>
      </footer>}
         { display && <div className={`footer-2 ${mode === 'dark' ? "bg-secondary" : ""} `}>
            <div className="container-fluid">
             <div className="row">
                 {
                  t("footer2",{returnObjects:true}).map((fd)=>{
                    return <div className=" col-6 col-sm-6 col-md-6 col-lg-3 d-flex service-content">
                      <Link to='#' ><i className={fd.icon}></i></Link>
                      <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.title}</h1>
                    </div>
                  })
                 }
             </div>
            </div>
          </div>}
         { display && <div className={`footer3 ${mode === 'dark'  ? "bg-secondary" : "" } `}>
            <div className="container-fluid">
              <div className="row ">
                <div className="links col-12 col-md-6 d-flex gap-2  col-lg-6 col-xl-8 col-xxl-8 "> 
                  <ul>
                  {
                    t('footer3',{returnObjects:true}).map((fd)=>{
                      return <li><Link className={`${mode === 'dark' ? "text-white" : " "}`} to={fd.href}>{fd.label}</Link></li>
                    })
                  }
                  </ul>
                  <select onChange={(e)=>setValue(e.target.value)} >
                    <option value="en">EN</option>
                    <option value="az">AZ</option>
                  </select>
                </div>
                <div className="footer-content col-12 col-md-5  col-lg-4 col-xl-4 col-xxl-3 ">
                  <p className={`${mode === 'dark' ? "text-white" : ""}`}>Copyright  2022 by spacingtechTM</p>
                </div>
              </div>
            </div>
          </div>}

    </>
  )
}

export default Footer
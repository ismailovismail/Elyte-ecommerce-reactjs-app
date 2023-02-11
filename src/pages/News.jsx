import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'
import { useContext } from 'react'
const News = () => {
    const blogs=useSelector((state)=>state.blog)
    const {t}=useTranslation()
    const {mode}=useContext(MainContext)
    useEffect(()=>{
      document.title='News | Elyte Ecommerce'
    },[])
  return (
    <>

      {
        blogs.map((item)=>{
            return <div className="main-card mt-5 d-flex justify-content-center">
            <div className={`card mb-3 ${mode === 'dark' ? "bg-secondary" : "" } `} style={{ maxWidth: 750 }}>
                <div className="row g-0">
                    <div className="col-md-7 col-lg-11 col-xl-7">
                        <div className="card-body">
                            <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""  } `}>{item.brand}</h5>
                            <h1 className={`card-title ${mode === 'dark' ? "text-white" : "" } `}>{item.title}</h1>
                            <p className={`card-text ${mode === 'dark' ? "text-white" : "" } `}>{item.text.slice(0,300)}</p>
                            <Link to={`/blog/${item.id}`} className='btn btn-dark mt-4 px-4'>{t('readmore')}</Link>
                        </div>
                    </div> 
                    <div className="image col-md-5 col-lg-11 col-xl-5 d-flex justfify-content-center">
                        <div className="hoverbox">
                            <div className="blog-icon d-flex justify-content-center align-items-center ">
                            <Link to={`/blog/${item.id}`} ><i className=" px-3 py-2 text-dark bi bi-link-45deg"></i></Link>
                            </div>
                        </div>
                        <img src={item.img} className="recent-blog-img img-fluid rounded-start" alt="..." />
                    </div> 
                </div>
            </div>
            </div>

        })
      }

    </>
  )
}

export default News
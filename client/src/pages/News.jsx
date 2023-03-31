import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'
import { useContext } from 'react'
const News = () => {
  const { mode } = useContext(MainContext)
  const { t } = useTranslation()
  const [data,setData]=useState([])
  useEffect(() => {
    document.title = 'News | Elyte Ecommerce'
    const getBlogList=async()=>{
       const response = await fetch('http://localhost:5000/api/get')
       setData( await response.json() )
    }
    getBlogList()
  }, [])
  return (
    <>

      {
        data.map((item) => {
          return <div className="main-card mt-5 d-flex justify-content-center">
            <div className={`card mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 750 }}>
              <div className="row g-0">
                <div className="col-md-7 col-lg-11 col-xl-7">
                  <div className="card-body">
                    <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{item.brand}</h5>
                    <h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{item.title}</h1>
                    <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{item.description.slice(0, 300)}</p>
                    <Link to={`/blog/${item.id}`} className='btn btn-dark mt-4 px-4'>{t('readmore')}</Link>
                  </div>
                </div>
                <div className="image col-md-5 col-lg-11 col-xl-5 d-flex justfify-content-center">
                  <div className="hoverbox">
                    <div className="blog-icon d-flex justify-content-center align-items-center ">
                      <Link to={`/blog/${item.id}`} ><i className=" px-3 py-2 text-dark bi bi-link-45deg"></i></Link>
                    </div>
                  </div>
                  <img src={`http://localhost:5000/images/${item?.img}`} className="recent-blog-img img-fluid rounded-start" alt="..." />
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
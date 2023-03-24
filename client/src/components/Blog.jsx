import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'
import { useContext } from 'react'
const Blog = () => {
    const { t } = useTranslation()
    const { mode } = useContext(MainContext)
    const [blogs,setBlogs]=useState([])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false
    };

    useEffect(()=>{
        const getData = async ()=>{
          const response = await fetch('http://localhost:5000/api/get')
          setBlogs( await response.json() )
        } 
        getData()
    },[])


    return (
        <>
            <div className="head">
                <h1 className={`text-center mt-2 mb-4 ${mode === 'dark' ? "text-white" : ""} `}>{t("recentNews")}</h1>
            </div>
            <div style={{ width: "80%" }} className="container-fluid">
                <div className="slider">
                    <Slider {...settings} >
                        {
                            blogs.map((fd) => {
                                return <div className={`main-card  d-flex justify-content-center`}>
                                    <div className={`card mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 750 }}>
                                        <div className="row g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{fd.brand}</h5>
                                                    <h1 className={`card-title ${mode === 'dark' ? "text-white" : ""}`}>{fd.title}</h1>
                                                    <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{fd.description.slice(0, 300)}</p>
                                                    <Link to={`/blog/${fd.id}`} className='btn btn-dark mt-4 px-4'>{t('readmore')}</Link>
                                                </div>
                                            </div>
                                            <div className="image col-md-5 d-flex justfify-content-center">
                                                <div className="hoverbox">
                                                    <div className="blog-icon d-flex justify-content-center align-items-center ">
                                                        <Link to={`/blog/${fd.id}`} ><i className=" px-3 py-2 text-dark bi bi-link-45deg"></i></Link>
                                                    </div>
                                                </div>
                                                <img src={fd.img} className="recent-blog-img img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            })
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Blog
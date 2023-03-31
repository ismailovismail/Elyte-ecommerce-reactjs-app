import React, { useContext,  useEffect,  useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import { MainContext } from '../context'


const BlogLayoutPage = () => {
  const { mode,blogs } = useContext(MainContext)
  const [searchTerm, setSearchTerm] = useState('')
  const borderClass = useRef()
  const { t } = useTranslation()
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch('http://localhost:5000/api/get')
       setData( await response.json() )
    }
    getData()
  },[])
  return (
    <section className={`blog ${mode === 'dark' ? 'bg-secondary' : ""} `}>
      <div className="switch-home">
        {mode === 'dark' ? " " : <hr />}
        <div className={`container-fluid ${mode === 'dark' ? "text-white" : ""} `}>
          <Link className={`${mode === 'dark' ? "text-white" : ""}`} >{t('navbar.home')}</Link> / {t('blog.news')}
        </div>
        {mode === 'dark' ? "" : <hr />}
      </div>
      <div className="blog-part">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center ">
            <div className=" mt-5 search-blog d-flex flex-column gap-3 col-12 col-lg-5 col-xl-4">
              <div className="search d-flex flex-column gap-4 ">
                <div className="title d-flex  gap-2">
                  <div className="line"></div>
                  <h1 className={`${mode === 'dark' ? "text-white" : ""}`} >{t('blog.search')}</h1>
                </div>
                <div className="input-group">
                  <input style={{ width: "80%" }} onChange={(e) => {
                    setSearchTerm(e.target.value)
                    if (e.target.value.trim() !== '') {
                      borderClass.current.className = 'p-1 border'
                    } else {
                      borderClass.current.className = ''
                    }

                  }} placeholder={t('blog.searchblog')} className=' py-2 px-3' type="text" />
                  <button style={{ width: "20%" }} className='btn py-2 px-3'><i className='fa-solid fa-search'></i> </button>
                  <ul ref={borderClass} style={{ width: "100%" }} className='p-1'>
                    {
                      blogs && blogs.filter((item) => {
                        if (searchTerm === '') {
                          return ''
                        } else if (item.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                          return item
                        }
                      }).map((item) => {
                        return <div className="card  mt-1 mb-3" style={{ maxWidth: 540 }}>
                          <div className="row g-0 d-flex align-items-center ">
                            <div className="col-2">
                              <img style={{ border: "none" }} width={70} src={`http://localhost:5000/images/${item?.img}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-9">
                              <div className="card-body">
                                <Link to={`/blog/${item?.id}`} className={"text-dark"} style={{ textDecoration: "none" }}  ><h1 className='card-title'>{item.brand}</h1></Link>
                                <h5 className='card-title'>{item.title}</h5>
                              </div>
                            </div>
                          </div>
                        </div>

                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="recent-posts">
                <div className="title d-flex gap-2">
                  <div className="line"></div>
                  <h1 className={`${mode === 'dark' ? "text-white" : ""}`}>{t('blog.recentpost')}</h1>
                </div>
                <div className="blog-cards mt-2">
                  <div className="main-card mb-2 ">
                    <div className={`card ${mode === 'dark' ? "bg-secondary" : ""} `}>
                      <div className="image">
                        <Link to={`/blog/${data[0]?.id}`}><div className="hoverbox"></div></Link>
                        <img src={`http://localhost:5000/images/${data[0]?.img}`} className='card-img-top img-fluid' alt="" />
                      </div>
                      <div className="card-body">
                        <Link to={`/blog/${data[0]?.id}`} ><h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}></h1></Link>
                        <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{data[0]?.brand}</h5>
                        <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{data[0]?.description.substr(0,200)}...</p>
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="row">
                      <div className={`card col-12 col-md-6 col-lg-12 col-xl-12 mb-3 ${mode === 'dark' ? "bg-secondary" : ""}`} style={{ maxWidth: 540 }}>
                        <div className="row d-flex align-items-center g-0">
                          <div className=" col-4 col-md-4">

                            <div className="image ">
                              <Link to={`/blog/${data[1]?.id}`} ><div className="hoverbox"></div></Link>
                              <img width={150} src={`http://localhost:5000/images/${data[1]?.img}`} className="img-fluid rounded-start" alt="..." />
                            </div>

                          </div>
                          <div className="col-8 col-md-8">
                            <div className="card-body">
                              <Link to={`/blog/${data[1]?.id}`} ><h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}></h1></Link>
                              <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{data[1]?.brand}</h5>
                              <p className={`card-text  ${mode === 'dark' ? "text-white" : ""} `}>{data[1]?.description.substr(0,150)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`card col-12 col-md-6 col-lg-12 col-xl-12 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row d-flex align-items-center g-0">
                          <div className=" col-4 col-md-4">
                            <div className="image">
                              <Link to={`/blog/${data[2]?.id}`} ><div className="hoverbox"></div></Link>
                              <img width={150} src={`http://localhost:5000/images/${data[2]?.img}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                          </div>
                          <div className=" col-8 col-md-8">
                            <div className="card-body">
                              <Link to={`/blog/${data[2]?.id}`}><h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}></h1></Link>
                              <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{data[2]?.brand}</h5>
                              <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{data[2]?.description.substr(0,150)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`card col-12 col-md-6 col-lg-12 col-xl-12 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row d-flex align-items-center g-0">
                          <div className=" col-4 col-md-4">
                            <div className="image">
                              <Link to={`/blog/${data[3]?.id}`} ><div className="hoverbox"></div></Link>
                              <img width={150} src={`http://localhost:5000/images/${data[3]?.img}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                          </div>
                          <div className=" col-8 col-md-8">
                            <div className="card-body">
                              <Link to={`/blog/${data[3]?.id}`}><h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}></h1></Link>
                              <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""}  `}>{data[3]?.brand}</h5>
                              <p className={`card-text  ${mode === 'dark' ? "text-white" : ""} `}>{data[3]?.description.substr(0,150)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`card col-12 col-md-6 col-lg-12 col-xl-12 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row d-flex align-items-center g-0">
                          <div className=" col-4 col-md-4">
                            <div className="image">
                              <Link to={`/blog/${data[4]?.id}`} ><div className="hoverbox"></div></Link>
                              <img width={150} src={`http://localhost:5000/images/${data[4]?.img}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                          </div>
                          <div className=" col-8 col-md-8">
                            <div className="card-body">
                              <Link to={`/blog/${data[4]?.id}`}><h1 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}></h1></Link>
                              <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{data[4]?.brand}</h5>
                              <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{data[4]?.description.substr(0,150)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
              <div className="tags mb-2 d-flex flex-column gap-2 ">
                <hr />
                <div className="title d-flex gap-2">
                  <div className="line"></div>
                  <h1 className={`${mode === 'dark' ? "text-white" : ""}`} >{t('blog.tag')}</h1>
                </div>
                <ul className='tag-links gap-1'>

                  <div className="tags-1 d-flex gap-2 ">
                    <li>
                      <Link className='btn btn-light text-secondary'>#Android</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary '>#Ios</Link>
                    </li>
                  </div>
                  <div className="tags-2 d-flex gap-2 ">
                    <li>
                      <Link className='btn btn-light text-secondary '>#Blog</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary '>#Device</Link>
                    </li>
                  </div>
                  <div className="tags-3 d-flex gap-2 ">
                    <li>
                      <Link className='btn btn-light text-secondary'>#Engineer</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary'>#Gadget</Link>
                    </li>
                  </div>
                  <div className="tags-4 d-flex gap-2">
                    <li>
                      <Link className='btn btn-light text-secondary'>#Mobile</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary'>#News</Link>
                    </li>
                  </div>
                  <div className="tags-5 d-flex gap-2">
                    <li>
                      <Link className='btn btn-light text-secondary'>#Raspberrypi</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary'>#Robot</Link>
                    </li>
                  </div>
                  <div className="tags-6 d-flex text-secondary gap-2">
                    <li>
                      <Link className='btn btn-light text-secondary'>#Smartphone</Link>
                    </li>
                    <li>
                      <Link className='btn btn-light text-secondary'>#Techie</Link>
                    </li>
                  </div>

                </ul>

              </div>
            </div>
            <div className="blog-pages col-12 col-lg-7 col-xl-8">
              <Outlet />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogLayoutPage
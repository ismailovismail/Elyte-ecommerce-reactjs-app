import React, { useContext, useEffect, useState } from 'react'
import '../i18n/i18n'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { collectionData, collectionImagelinks, collectionLinks } from '../data/CollectionLinks'
import products from '../data/ProductsData'
import { MainContext } from '../context'
import { useCart } from 'react-use-cart'
import { useSelector } from 'react-redux'
import logo from '../assets/img/logo.svg'

const Nav = () => {
  const location = useLocation()
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    if (location.pathname === '/admin') {
      setDisplay(false)
    } else if (location.pathname === '/dashboard') {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
    setIcon(
      localStorage.getItem('mode-icon')
    )
    setMode(
      localStorage.getItem('mode')
    )
    const myFunction = () => {
      if (document.documentElement.scrollTop > 20) {
        document.querySelector('.header-lg ').style.position = 'fixed'
        document.querySelector('.header-lg ').style.top = '0'
        document.querySelector('.header-lg').style.zIndex = '99999999999999999999999999999'



      } else {
        document.querySelector('.header-lg ').style.position = 'relative'

      }

    }
    window.onscroll = myFunction
  }, [display])
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(products)

  const trimmer = products.find((fd) => fd.name === "Braun Series 1 170s Multi BLK")
  const phone = products.find((fd) => fd.name === "Iphone 14 256GB Midnight")
  const headphone = products.find((fd) => fd.name === "Apple AirPods Max MGYL3RUA Sky Blue")
  const camera = products.find((fd) => fd.name === "Canon EOS 80D EF-S 18-135 IS USM")
  console.log(trimmer);
  const { t, i18n } = useTranslation()
  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { cartItems, login,setLogin, userLogin,logoutHandler } = useContext(MainContext)
  const { totalItems } = useCart()
  const blogs = useSelector((state) => state.blog)
  const [icon, setIcon] = useState('fa-solid fa-moon')
  const [error, setError] = useState(null)
  const { mode, setMode } = useContext(MainContext)
  const modeHandler = () => {
    if (icon === 'fa-solid fa-moon') {
      localStorage.setItem('mode-icon', 'fa-solid fa-sun')
      setIcon(localStorage.getItem('mode-icon'))
      localStorage.setItem('mode', 'dark')
      setMode(localStorage.getItem('mode'))
    } else {
      localStorage.setItem('mode-icon', 'fa-solid fa-moon')
      setIcon(localStorage.getItem('mode-icon'))
      localStorage.setItem('mode', 'light')
      setMode(localStorage.getItem('mode'))
    }
  }
  return (
    <>


      {display && <header className='header-lg'>
        <nav className={`navbar navbar-expand-xl ${mode === 'dark' ? "bg-secondary navbar-dark" : "bg-white"}`}>
          <div className="container-fluid">
            <NavLink to={'/'}>
              <img width={150} className={`${mode === 'dark' ? "bg-secondary" : ""}`} src={logo} alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to='/' className='nav-link'>{t('navbar.home')}</NavLink>
                </li>
                <li className="shop nav-item">
                  <NavLink className='nav-link'>{t('navbar.shop')} <i class="bi bi-chevron-down"></i> </NavLink>
                  <div className={`shop-items ${mode === 'dark' ? "bg-secondary" : ""} `}>
                    <div className="row">
                      <div className="links col-lg-3 ">
                        <ul>
                          {
                            collectionLinks.map((fd, i) => {
                              return <li key={i} ><a className={`${mode === 'dark' ? 'text-white' : ''}`} href={`/collection/${fd.type}`}>{fd.label}</a></li>
                            })
                          }
                        </ul>
                      </div>
                      <div className="images col-lg-6 ">
                        {
                          collectionImagelinks.map((fd, i) => {

                            return <div key={i} className="image">
                              <Link to={`/collection/${fd.type}`}><div className="hoverbox"></div></Link>
                              <img src={fd.image} alt="" />
                            </div>
                          })
                        }
                      </div>
                    </div>
                  </div>


                </li>
                <li className=" product nav-item">
                  <NavLink className='nav-link'>{t('navbar.product')} <i class="bi bi-chevron-down"></i> </NavLink>
                  <div className={`product-items ${mode === 'dark' ? "bg-secondary" : ""} `}>
                    <h1 className={`text-center mb-3 ${mode === 'dark' ? 'text-white' : ""} `}>Best Products</h1>
                    <div className="row">
                      <div className={`card col-6 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={trimmer.image1} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <Link to={`/products/${trimmer.type}/${trimmer.name}`} ><h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{trimmer.name}</h5></Link>
                              <div className="price">
                                <h1 className={`${mode === 'dark' ? 'text-white' : ''}`}>${trimmer.price}</h1>
                                <del className={`${mode === 'dark' ? 'text-white' : ""}`}>${trimmer.delprice}</del>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`card  col-6 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={phone.image1} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <Link to={`/products/${phone.type}/${phone.name}`} ><h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{phone.name}</h5></Link>
                              <div className="price">
                                <h1 className={`${mode === 'dark' ? 'text-white' : ""}`} >${phone.price}</h1>
                                <del className={`${mode === 'dark' ? 'text-white' : ""}`} >${phone.delprice}</del>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="row">
                      <div className={`card col-6 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={headphone.image1} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <Link to={`/products/${headphone.type}/${headphone.name}`} ><h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{headphone.name}</h5></Link>
                              <div className="price">
                                <h1 className={`${mode === 'dark' ? "text-white" : ""}`}>${headphone.price}</h1>
                                <del className={`${mode === 'dark' ? "text-white" : ""}`}>${headphone.delprice}</del>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`card col-6 mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={camera.image1} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <Link to={`/products/${camera.type}/${camera.name}`} ><h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{camera.name}</h5></Link>
                              <div className="price">
                                <h1 className={`${mode === 'dark' ? "text-white" : ""}`} >${camera.price}</h1>
                                {camera.delprice && <del className={`${mode === 'dark' ? "text-white" : ""}`} >{camera.delprice}</del>}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li className=" collection nav-item">
                  <NavLink className='nav-link'>{t('navbar.collection')} <i class="bi bi-chevron-down"></i> </NavLink>
                  <div className={`collection-items ${mode === 'dark' ? "bg-secondary" : ""} `}>
                    <div className="row">
                      {
                        collectionData.map((fd, i) => {
                          return <div key={i} className="image col-lg-3 ">
                            <a href={`/collection/${fd.type}`} ><div className="hoverbox"></div></a>
                            <img src={fd.image} alt="" />
                            <h1 className={`${mode === 'dark' ? "text-white" : ""}`} >{fd.label}</h1>
                          </div>



                        })
                      }
                    </div>
                  </div>
                </li>
                <li className='nav-item blog-nav' >
                  <NavLink className='nav-link'>{t('navbar.blog')} <i class="bi bi-chevron-down"></i> </NavLink>
                  <div className={`blog-items ${mode === 'dark' ? "bg-secondary" : ""} `}>
                    <div className="title mt-2 ">
                      <h1 className={`text-center fw-bold ${mode === 'dark' ? "text-white" : ""} `}>
                        {t('blog.blog')} / {t('blog.newswitch')}
                      </h1>
                    </div>
                    <ul className='blog-crd mx-2 p-2 '>
                      {
                        blogs.map((item) => {
                          return <div className={`card mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                            <div className="row g-0 d-flex align-items-center ">
                              <div className="col-md-2">
                                <img width={70} src={item.img} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-10">
                                <div className="card-body">
                                  <Link className={`text-decoration-none text-dark fw-bold ${mode === 'dark' ? "text-white" : ""} `} to={`/blog/${item.id}`}><h1 className="card-title">{item.brand}</h1></Link>
                                  <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{item.title}</h5>
                                  <p className={`card-text ${mode === 'dark' ? "text-white" : ""} `}>{item.text.slice(0, 40)}...</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        })
                      }
                    </ul>
                    <div className="news-switch d-flex justify-content-center mb-1  ">
                      <Link className={`${mode === 'dark' ? "text-white" : "text-dark"}`} to={'/blog/news'} >{t('blog.newswitch')}</Link>
                    </div>
                  </div>
                </li>
                <li className='nav-item pages-nav '>
                  <NavLink className='nav-link'>{t('navbar.pages')} <i class="bi bi-chevron-down"></i> </NavLink>
                  <ul className={`page-items ${mode === 'dark' ? 'bg-secondary' : "bg-white"} `}>
                    <li>
                      <Link className={`text-decoration-none d-flex justify-content-between ${mode === 'dark' ? 'text-white' : 'text-secondary'} `}> {t('pages.aboutus')}  <i class="bi bi-chevron-right"></i> </Link>
                      <ul className={`about-links ${mode === 'dark' ? "bg-secondary" : "bg-white"} `}>
                        <li>
                          <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/about'} >{t('pages.aboutus')}</Link>
                        </li>
                        <li>
                          <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/about2'} >{t('pages.aboutus')} 2</Link>
                        </li>
                        <li>
                          <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/about3'} >{t("pages.aboutus")} 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className={`text-decoration-none d-flex justify-content-between ${mode === 'dark' ? "text-white" : "text-secondary"} `}> {t('pages.contactus')} <i class="bi bi-chevron-right"></i> </Link>
                      <ul className={`contact-links ${mode === 'dark' ? "bg-secondary" : "bg-white"} `} >
                        <li>
                          <Link className={` text-decoration-none  ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/contact'} >{t('pages.contactus')}</Link>
                        </li>
                        <li>
                          <Link className={` text-decoration-none  ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/contact2'} >{t('pages.contactus')} 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/faq'} >{t('pages.faq')}</Link>
                    </li>
                    <li>
                      <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"} `} to={'/privacy'} >{t('pages.privacy')}</Link>
                    </li>
                    <li>
                      <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"}`} to={'/terms'} >{t('pages.terms')}</Link>
                    </li>
                    <li>
                      <Link className={`text-decoration-none ${mode === 'dark' ? "text-white" : "text-secondary"}`} to={'*'}>404</Link>
                    </li>
                  </ul>
                </li>
              </ul>


              <div className="nav-btns d-flex align-items-center ">
                {
                  login === 'false' ? <Link to={'/login'} className='btn mx-2 logout-btn btn-outline-dark'>{t('loginData.login')}</Link> : <div className="dropdown logout-btn">
                    <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className='fa-solid fa-user'></i> {userLogin}
                    </button>
                    <ul className="dropdown-menu">
                      <li><button onClick={()=>{
                         logoutHandler()
                      }} className="dropdown-item">{t('loginData.logout')} <i className="bi bi-box-arrow-right"></i> </button></li>
                    </ul>
                  </div>

                }
                <div className="search-system">

                  <div className="search-dropdown dropdown">
                    <button className={`btn ${mode === 'dark' ? "text-white" : "text-dark"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className='fa-solid fa-search' ></i>
                    </button>
                    <ul className={`dropdown-menu p-2 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ width: "500px" }} >
                      <input value={searchTerm} type="text" placeholder={t('search')} className={`mb-2 rounded p-2 `} onChange={(e) => setSearchTerm(e.target.value)} />
                      {
                        data.filter((val) => {
                          if (searchTerm === '') {
                            return ""
                          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                          }
                        }).splice(0, 4).map((fd, i) => {

                          return <Link key={i} onClick={() => {
                            setSearchTerm('')
                          }} to={`products/${fd.type}/${fd.name}`}> <div className={`dropdown-item card mb-3 ${mode === 'dark' ? "bg-secondary" : ""} `} style={{ maxWidth: 540 }}>
                              <div className="row g-0">
                                <div className="col-md-2 d-flex align-items-center ">
                                  <img src={fd.image1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-6">
                                  <div className="card-body d-flex flex-column gap-2">
                                    <h5 className={`card-title ${mode === 'dark' ? "text-white" : ""} `}>{fd.name}</h5>
                                    <div className="price d-flex gap-3">
                                      <h1 className={`${mode === 'dark' ? "text-white" : ""}`}>$ {fd.price}</h1>
                                      {fd.delprice && <h1><del className={`${mode === 'dark' ? 'text-white' : ""}`}>$ {fd.delprice}</del></h1>}
                                    </div>
                                    <div className="review">
                                      {
                                        fd.review.map((a) => {
                                          return a
                                        })
                                      }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>

                        })
                      }

                    </ul>
                  </div>


                </div>

                <div className="lang">
                  <div className="dropdown">
                    <button className={`btn ${mode === 'dark' ? "text-white" : "text-dark"} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa-solid fa-globe"></i>
                    </button>
                    <ul className={`dropdown-menu ${mode === 'dark' ? "bg-secondary" : ""} `}>
                      <li>
                        <button onClick={() => handleClick('az')} className={`dropdown-item ${mode === 'dark' ? "text-white" : ""} `}>AZ</button>
                      </li>
                      <li>
                        <button onClick={() => handleClick('en')} className={`dropdown-item ${mode === 'dark' ? 'text-white' : ""} `}>EN</button>
                      </li>
                    </ul>

                  </div>

                </div>

                <div className="wishlist">
                  <Link to={'/wishlist'} className={`btn ${mode === 'dark' ? "text-white" : "text-dark"} `}><i class="bi bi-heart"></i> <sup className='bg-warning'>{totalItems}</sup> </Link>
                </div>
                <div className="cart">
                  <Link to='/mycart' className={`btn ${mode === 'dark' ? "text-white" : "text-dark"}`}><i class="bi bi-handbag"></i> <sup className='bg-warning' >{cartItems.length}</sup> </Link>
                </div>
                <div className="mode-btn">
                  <button onClick={modeHandler} className='btn'><i className={`text-warning ${icon}`}></i></button>
                </div>
              </div>
            </div>

          </div>
        </nav>

      </header>}


      <header className={`header-sm`}>
        <nav className={`navbar ${mode === 'dark' ? "bg-secondary" : "bg-white"} `}>
          <div className="container-fluid">
            <Link to='/' ><img width={150} src='https://cdn.shopify.com/s/files/1/0550/8182/8594/files/logo.svg?v=9038699364917269404' alt="" /></Link>
            <div className="buttons d-flex gap-1">

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="search">
                <div className="dropdown">
                  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`fa-solid fa-search ${mode === "dark" ? "text-white" : ""} `} ></i>
                  </button>
                  <ul className=" mx-5 dropdown-menu">
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='p-1 rounded' type="text" placeholder='Search...' />
                    {
                      data.filter((val) => {
                        if (searchTerm === '') {
                          return ""
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                          return val
                        }
                      }).slice(0, 5).map((fd) => {
                        return <Link onClick={() => {
                          setSearchTerm('')
                        }} to={`products/${fd.type}/${fd.name}`}> <div className=" dropdown-item card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row d-flex  g-0">
                              <div className="col-2 d-flex align-items-center ">
                                <img width={70} src={fd.image1} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className='col-6'>
                                <div className="card-body d-flex flex-column gap-2">
                                  <h5 className="card-title">{fd.name.substring(0, 30)}</h5>
                                  <div className="price d-flex gap-3">
                                    <h1>$ {fd.price}</h1>
                                    {fd.delprice && <h1><del>$ {fd.delprice}</del></h1>}
                                  </div>
                                  <div className="review">
                                    {
                                      fd.review.map((a) => {
                                        return a
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>

                      })
                    }
                  </ul>
                </div>

              </div>
              <Link to={'/wishlist'} className='btn btn-white'><i className={`bi bi-heart ${mode === 'dark' ? "text-white" : " "} `}></i> <sup className='bg-warning'>{totalItems}</sup> </Link>
              <Link to={'/mycart'} className='btn btn-white'><i className={`bi bi-handbag ${mode === 'dark' ? "text-white" : ""} `}></i><sup className='bg-warning'>{cartItems.length}</sup></Link>
              <button onClick={modeHandler} className='btn'><i className={`text-warning ${icon}`}></i></button>
            </div>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body scroll ">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header p-4 " id="flush-headingOne">
                      <Link to='/' >{t('navbar.home')}</Link>
                    </h2>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        {t('navbar.shop')}
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body d-flex flex-column gap-2 ">
                        <ul className='sm-navlinks'>
                          {
                            collectionLinks.map((fd, i) => {
                              return <li key={i} ><Link to={`collection/${fd.type}`} >{fd.label}</Link></li>
                            })
                          }
                        </ul>
                        <div className="sm-navimages">
                          {
                            collectionImagelinks.map((fd, i) => {
                              return <Link key={i} to={`collection/${fd.type}`}><img src={fd.image} alt="" /></Link>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" product-nav accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        {t('navbar.product')}
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <h1 className='fw-bold text-center my-2'>Best produts</h1>
                        <div className="row">
                          <div className="card col-12 mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={trimmer.image1} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <Link to={`products/${trimmer.type}/${trimmer.name}`} ><h5 className="card-title">{trimmer.name}</h5></Link>
                                  <div className="price d-flex gap-2">
                                    <h1>${trimmer.price}</h1>
                                    <del><h1>${trimmer.delprice}</h1></del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card col-12 mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={phone.image1} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <Link to={`products/${phone.type}/${phone.name}`} ><h5 className="card-title">{phone.name}</h5></Link>
                                  <div className="price d-flex gap-2 ">
                                    <h1>${phone.price}</h1>
                                    <del><h1>${phone.price}</h1></del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card col-12 mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={headphone.image1} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <Link to={`products/${headphone.type}/${headphone.name}`}><h5 className="card-title">{headphone.name}</h5></Link>
                                  <div className="price d-flex gap-2 ">
                                    <h1>${headphone.price}</h1>
                                    <del><h1>${headphone.delprice}</h1></del>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img src={camera.image1} className="img-fluid rounded-start" alt="..." />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <Link to={`products/${camera.type}/${camera.name}`} ><h5 className="card-title">{camera.name}</h5></Link>
                                  <div className="price">
                                    <h1>${camera.price}</h1>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        {t("navbar.collection")}
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div className=" collection accordion-body">
                        <div className="row gap-2 ">
                          {
                            collectionData.map((fd, i) => {
                              return <div key={i} className="images col-5 ">

                                <Link to={`collection/${fd.type}`}>
                                  <div className="hoverbox"></div>
                                </Link>
                                <img width={120} height={120} src={fd.image} alt="" />
                                <h1 className='text-center' >{fd.label}</h1>

                              </div>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        {t('navbar.blog')}
                      </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                      <div className=" collection accordion-body">
                        <div className="row d-flex flex-column gap-3 ">
                          <h1 className='text-center fw-bold'> {t('blog.blog')} / {t('blog.newswitch')}</h1>
                          {
                            blogs.map((item) => {
                              return <div className="card p-0 border-0" style={{ width: '18rem' }}>
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <Link className='text-decoration-none text-dark' to={`/blog/${item.id}`} ><h1 className="card-title fw-bold">{item.brand}</h1></Link>
                                  <h5>{item.title}</h5>
                                  <p>{item.text.slice(0, 35)}...</p>
                                </div>
                              </div>

                            })
                          }
                          <Link className='text-center text-dark' to={`/blog/news`} >{t('blog.news')}</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        {t('navbar.pages')}
                      </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                      <div className=" collection accordion-body">
                        <ul className='d-flex flex-column gap-2'>
                          <li><Link className='text-dark text-decoration-none' to={'about'}>{t('pages.aboutus')}</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'about2'}>{t('pages.aboutus')} 2</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'about3'}>{t('pages.aboutus')} 3</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'contact'}>{t('pages.contactus')}</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'contact2'}>{t('pages.contactus')} 2</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'faq'}>{t('pages.faq')}</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'privacy'}>{t('pages.privacy')}</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'terms'}>{t('pages.terms')}</Link></li>
                          <li><Link className='text-dark text-decoration-none' to={'*'} >404</Link></li>
                        </ul>


                      </div>
                    </div>
                  </div>



                </div>

              </div>
            </div>
          </div>
        </nav>

      </header>






    </>
  )
}

export default Nav
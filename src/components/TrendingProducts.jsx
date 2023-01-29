import  React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import products from '../data/ProductsData'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { MainContext } from '../context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart'


const TrendingProducts = () => {
    const { t } = useTranslation()
    useEffect(() => {
        const filteringbtns = document.querySelectorAll(".filtering")
        for (let btn of filteringbtns) {
            btn.onclick = () => {
                document.querySelector('.filtering.active').classList.remove('active')
                btn.classList.add('active')
            }
        }





    }, [])

    const {addItem,items}=useCart()
    const notify = () => toast.success("Success");
    const [data, setData] = useState(products.filter((fd) => fd.status === "New"))
    const {addProduct,mode}=useContext(MainContext)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }

            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }
            },
            {

                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }

            }
        ]
    }
    const filteringProducts = (selectedStatus) => {
        const result = products.filter((fd) => fd.status === selectedStatus)
        setData(result)
    }
   

    
    return (
        <>
            <div className="head">
                <div className="title">
                    <h1 className={`text-center ${mode === 'dark' ? "text-white" : "text-secondary"  } `}>{t("trendingproduct")}</h1>
                </div>
                <div className="filter d-flex justify-content-center ">
                    <div className="buttons d-flex gap-2 ">
                        <div className="newpr-btn filtering active ">
                            <button className={`filter-btn ${mode === 'dark' ? "text-white" :""  } `} onClick={() => { filteringProducts("New") }} >{t("newproductbtn")}</button>
                            <div className="line "></div>
                        </div>
                        <div className="featurepr-btn filtering ">
                            <button className={`filter-btn ${mode === 'dark' ? "text-white" : "" } `} onClick={() => { filteringProducts("Feature") }} >{t("featureproductbtn")}</button>
                            <div className="line"></div>
                        </div>
                        <div className="bestpr-btn filtering">
                            <button className={`filter-btn ${mode === 'dark' ? "text-white" : "" } `} onClick={() => { filteringProducts("Best") }}>{t("bestproductbtn")}</button>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="cards ">
                    <Slider  {...settings} >
                        {
                            data.map((fd) => {
                                return <div key={fd.id} className="main-card d-flex justify-content-center">
                                    <div data-aos='fade-up' data-aos-duration='2000' className={`card ${mode === 'dark' ? "bg-secondary" : " "  } `}>
                                        <div className="image">


                                            <div className=" image1 ">
                                                <div className="status mx-2">
                                                <h1 className='mt-1' >{fd.status}</h1>
                                                </div>

                                                <img height={300} src={fd.image2} className='card-img-top' alt="" />

                                            </div>

                                            <div className="  image2">
                                                <div className="wishlist p-2"> 
                                                    {items.find((a)=>a.id === fd.id) ? <button className='wish' disabled> <i class="bi bi-check"></i> </button> : <button className='wish' onClick={()=>addItem(fd)}> <i className='bi bi-heart' ></i> </button>  }
                                                </div>
                                                <div className="buttons d-flex justify-content-center ">
                                                    
                                                    <button onClick={()=>notify(addProduct(fd))} className='btn btn-warning'>{t('addtocart')}</button>
                                                    
                                                    <button className='btn btn-warning'><Link to={`/products/${fd.type}/${fd.name}`} style={{color:"slategray"}} >{t('quickview')}</Link></button>
                                                </div>





                                                <img height={300} src={fd.image1} className='card-img-top' alt="" />

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Link to={`products/${fd.type}/${fd.name}`} >
                                                <h1 className={`card-title text-center ${mode === 'dark' ? "text-white" : "text-dark"  }`} >{fd.name}</h1>
                                                <div className="price d-flex justify-content-center">
                                                    <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >$ {fd.price}</h1>
                                                    <del className={`${mode === 'dark' ? "text-white" : "" }`}>$ {fd.delprice}</del>
                                                </div>
                                            </Link>
                                            <div className="review d-flex justify-content-center">
                                                {
                                                    fd.review.map((a) => {
                                                        return a
                                                    })
                                                }
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

export default TrendingProducts
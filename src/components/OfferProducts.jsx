import React, { useContext, useEffect, useState } from 'react'
import products from '../data/ProductsData'
import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import { MainContext } from '../context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart'
const OfferProducts = () => {
    const {mode}=useContext(MainContext)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }
            },


        ]
    }
    useEffect(() => {

        const counter = () => {
            const countDate = new Date('Jan 1 , 2024 00:00:00 ').getTime()
            const now = new Date().getTime()
            let gap = countDate - now
            let second = 1000;
            let minute = second * 60;
            let hour = minute * 60;
            let day = hour * 24
            const counterData = [{
                days: Math.floor(gap / (day)),
                hours: Math.floor((gap % (day)) / (hour)),
                minutes: Math.floor((gap % (hour)) / (minute)),
                seconds: Math.floor((gap % (minute)) / (second))
            }]
            setTimer(counterData)

        }
        setInterval(() => {
            counter()
        }, 1000);


    }, [])
    const {addItem,items}=useCart()
    const {addProduct}=useContext(MainContext)
    const notify = () => toast.success("Success");
    const {t}=useTranslation()
    const [data, setData] = useState(products.filter((fd) => fd.status2 === "offer-products"))
    const [timer, setTimer] = useState([])
    const navigate=useNavigate()
    
    return (

        <>
            <div className="head mt-3 mb-5">
                <div className="title">
                    <h1 className={`${mode === 'dark' ? "text-white" : ""  } text-center`} >{t("offerproducts")}</h1>
                    
                </div>
            </div>  
            <Slider className='mt-2' {...settings} >
                
                {
                    data.map((fd) => {
                        return <div key={fd.id} data-aos='fade-up' data-aos-duration='3000'  className={`card mb-3 col-xl-6 ${mode ==='dark'? "bg-secondary" : ""  } `} style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                
                                 <img src={fd.image1} className="img-fluid rounded-start col-md-3  col-xl-4"  alt="" />
                        
                                <div className="col-md-9  col-xl-8">
                                    <div className="card-body d-flex flex-column justify-content-center gap-2 " style={{height:"220px"}} >
                                        <h5 className="card-title">
                                            <Link to={`products/${fd.type}/${fd.name}`} ><h1 className={`${mode === 'dark' ? "text-white" : ""  }`} >{fd.name}</h1></Link>
                                            </h5>
                                        <div className="price d-flex gap-2 ">
                                            {fd.price && <h1 className={`${mode === 'dark' ? "text-white" : ""  }`} >${fd.price}</h1>}
                                            {fd.delprice && <del className={`${mode === 'dark' ? "text-white" : "" }`}>${fd.delprice}</del>}
                                        </div>
                                        <div className="review">
                                            {
                                                fd.review.map((a) => {
                                                    return a
                                                })
                                            }
                                        </div>
                                    
                                            {
                                                timer.map((fd)=>{
                                                    return <div className="counter">
                                                        <h1 className={`${mode === 'dark' ? "text-white" : ""  }`} >{fd.days} {t('day')}</h1> :
                                                        {fd.hours < 10 ? <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >0{fd.hours} {t('hrs')}</h1>  : <h1 className={`${mode === 'dark' ? "text-white" : "" }`}>{fd.hours} {t('hrs')}</h1>} : 
                                                        {fd.minutes < 10 ? <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >0{fd.minutes} {t('minute')}</h1> : <h1 className={`${mode === 'dark' ? "text-white" : ""  }`} >{fd.minutes} {t('minute')}</h1>} :
                                                        {fd.seconds < 10 ? <h1 className={`${mode === 'dark' ? "text-white" : ""  }`} >0{fd.seconds} {t('second')}</h1> : <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{fd.seconds} {t('second')}</h1> }
                                                    </div>
                                                })
                                            }

                                            <div className="buttons">
                                                <button onClick={()=>notify(addProduct(fd))} className={`btn ${mode === 'dark' ? "text-white" : ""  } `}><i class="bi bi-handbag"></i></button>
                                                {items.find((a)=>a.id === fd.id) ? <button className={`btn ${mode === 'dark' ? "text-white" : "" } `} disabled><i className='bi bi-check'></i> </button> : <button onClick={()=>{notify(addItem(fd))}} className={`btn ${mode === 'dark' ? "text-white" : "" }`}><i class="bi bi-heart"></i></button> }
                                                <button onClick={()=>{
                                                     navigate(`/products/${fd.type}/${fd.name}`)
                                                }}  className={`btn ${mode === 'dark' ? "text-white" : "" } `}><i class="bi bi-eye"></i></button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        


                    })
                }
            
            </Slider>
        </>
    )
}

export default OfferProducts
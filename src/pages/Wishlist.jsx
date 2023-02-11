import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { MainContext } from '../context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Wishlist = () => {
    const { items,removeItem } = useCart()
    const {addProduct,mode}=useContext(MainContext)
    const navigate=useNavigate()
    const notify = () => toast.success("Success");
    
    const {t}=useTranslation()
     useEffect(()=>{
        document.title='Wishlist | Elyte Ecommerce'
     },[])
    return (
        <>
            <div className={`switch-home ${mode === 'dark' ? "bg-secondary py-2" : "" } `}>
                {mode === 'dark' ? "" : <hr /> }
                <div style={{width:"90%"}} className={`home-switch container-fluid ${mode === 'dark' ? "text-white" : "" } `}>
                    <Link className={`${mode === 'dark' ? "text-white" : "" }`} to={'/'}>{t('navbar.home')}</Link> / {t('wishlistCart')}
                </div>
                {mode === 'dark' ? "" : <hr /> }
            </div>
            {items.length === 0 && <div style={{ height: "80vh" }} className={`empty-cart  d-flex flex-column gap-3 justify-content-center align-items-center ${mode === 'dark' ? "bg-secondary" : "" }`}>
                <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{t('emptyWishlist.empty')}</h1>
                <p className={`text-center ${mode === 'dark' ? "text-white" : "" } `} >{t('emptyWishlist.empty2')}</p>

            </div>}
            {
                items.length > 0 && <div style={{height:"auto"}} className={`cart py-5 ${mode === 'dark' ? "bg-secondary " : "" }`}>
                    <div className="container-fluid">
                        <div  className="wish-cart  rounded">
                            <div className="title">
                                <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >{t('mywishlist')}</h1>
                            </div>
                            <div style={{height:"auto"}} className="products">
                                {
                                    items.map((fd) => {
                                        return <div className={`card mt-3 mb-3 ${mode === 'dark' ? "bg-secondary" : ""}`} style={{ maxWidth:"750px" }}>
                                            <div style={{width:"100%"}} className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={fd.image1} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <div className="title">
                                                        <h5 className={`card-title ${mode === 'dark' ? "text-white" : "" }`}>{fd.name}</h5>
                                                        </div>
                                                        <div className="shop-buttons d-flex gap-2 ">
                                                          
                                                             
                                                                 <button disabled={fd.stockCount === 0  } onClick={()=>notify(addProduct(fd))} className={`btn btn-outline-dark ${mode === 'dark' ? "bg-white text-dark" : "" }`}>{t('addtocart')}</button>
                                                             
                                                          
                                                           
                                                             <button disabled={fd.stockCount === 0} onClick={()=>{
                                                                 navigate('/checkout')
                                                                 addProduct(fd)
                                                              }} className={`btn btn-outline-dark ${mode === 'dark' ? "bg-white text-dark" : "" }`}>{t('buynow')}</button>
                                                           
                                                        </div>
                                                        <div className="price d-flex flex-column gap-2">
                                                         <h1 className={`card-title ${mode === 'dark' ? "text-white" : "" }`}>$ {fd.price}</h1>
                                                         <button onClick={()=>removeItem(fd.id)} className={`btn btn-outline-danger ${mode === 'dark' ? "bg-danger text-white" : "" }`}>{t('remove')}</button>      
                                                          {
                                                            fd.stockCount === 0 && fd.availability === 'Stock out' && <p className={` ${mode === 'dark' ? "text-white" : "text-danger" }`} >{t('availabilityCard')}</p>
                                                          }
                                                          
                                                        </div>                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }



        </>
    )
}

export default Wishlist
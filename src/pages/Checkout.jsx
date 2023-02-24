import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { MainContext } from '../context'
const Checkout = () => {
    const { cartItems,login } = useContext(MainContext)
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    const {t}=useTranslation()
    const navigate=useNavigate()
    useEffect(()=>{
        document.title='Checkout | Elyte Ecommerce'
    },[])
    const submitHandler=(e)=>{
        e.preventDefault()
        
        if (login === "true" && window.confirm('Are you sure?')===true) {
        if (cartItems.length>0) {
            alert('Successfully')
            localStorage.removeItem('mycart')
             window.location.reload(true)
        }else{
            alert('Basket is empty')
        }
         }else{
            navigate('/login')
         }
        
    }
    return (
        <>
            <section className="checkout-page p-2 mt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="form p-3 col-xl-6">
                            <div className=" mb-2 title">
                                <h1>Electro-elyte</h1>
                            </div>
                            <div className="links">
                                <ul className='d-flex gap-2' >
                                    <li>
                                        <Link className='text-success' to='/mycart'>{t('checkoutPage.cart')} <i className="bi bi-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link>{t('checkoutPage.information')} <i className="bi bi-chevron-right"></i></Link>
                                    </li>
                                    <li>
                                        <Link>{t('checkoutPage.shipping')} <i className="bi bi-chevron-right"></i> </Link>
                                    </li>
                                    <li>
                                        <Link>{t('checkoutPage.payment')} <i className="bi bi-chevron-right"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="contact d-flex gap-2 flex-column ">
                                    <label className='mt-2' htmlFor="">{t('checkoutPage.contactinfo')}</label>
                                    <input required  className='p-2 rounded' type="text" placeholder={t('checkoutPage.emailornum')} />
                                    <div className="check-email d-flex gap-1">
                                        <input required type="checkbox" name="" id="" />
                                        <label htmlFor="">{t('checkoutPage.emailme')}</label>
                                    </div>
                                </div>
                                <div className="shipping mt-3 d-flex flex-column gap-3">
                                    <div className="title">
                                        <h1>{t('checkoutPage.shippingadress')}</h1>
                                    </div>
                                    <div className="select mt-2">
                                        <select className="form-select p-2" aria-label="Default select example">
                                            <option selected>Azerbaijan</option>
                                            <option value={1}>Georgia</option>
                                            <option value={2}>Turkey</option>
                                            <option value={3}>Russia</option>
                                        </select>

                                    </div>
                                    <div className="name-input d-flex gap-1 mt-2">
                                        <input required  className='p-2 rounded col-6' type="text" placeholder={t('checkoutPage.firstname')} />
                                        <input required  className='p-2 rounded col-6 ' type="text" placeholder={t('checkoutPage.lastname')} />
                                    </div>
                                    <div className="address d-flex flex-column gap-2 mt-2">
                                        <input required className='col-12 p-2 rounded' type="text" placeholder={t('checkoutPage.address')} />
                                        <input required  className='col-12 p-2 rounded' placeholder={t('checkoutPage.apartment')} type="text" name="" id="" />
                                    </div>
                                    <div className="city-input d-flex gap-2 mt-2">
                                        <input required type="text" className='p-2 rounded col-6' placeholder={t('checkoutPage.city')} />
                                        <input required className='p-2 rounded col-6' type="text" placeholder={t('checkoutPage.postalcode')} />
                                    </div>
                                    <div className="save-check mt-2 d-flex gap-1">
                                        <input required type="checkbox" name="" id="" />
                                        <label htmlFor="">{t('checkoutPage.save')}</label>
                                    </div>


                                </div>
                                <div className="buttons d-flex justify-content-between mt-3 mb-2">
                                    <Link className='text-success' to={'/mycart'} >
                                        <i class="bi bi-chevron-left"></i> {t('checkoutPage.returncart')}
                                    </Link>
                                    <button onClick={()=>{
                                        if (login === "false") {
                                            navigate('/login')
                                        }
                                    }} className='btn btn-success'>{t('checkoutPage.continue')}</button>
                                </div>
                            </form>
                        </div>
                        <div className=" bg-light p-4 d-flex flex-column gap-2 cart-items col-xl-6">
                            
                        {
                                cartItems.map((fd) => {
                                    return <div className="card d-flex flex-row justify-content-between">
                                        <div className="image-name d-flex gap-2">
                                            <img width={70} src={fd.image1} alt="" />
                                            <div className="name-color d-flex flex-column gap-2">
                                                <h5>{fd.name}</h5>
                                                <h5>{fd.color}</h5>
                                                
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>$ {(fd.price * fd.qty)}</h5>
                                        </div>
                                       
                                    </div>

                                })
                            }
                            <hr />
                            <div className="total-price d-flex justify-content-between">
                                <h1>{t('checkoutPage.subtotal')}</h1>
                                <h5>$ {itemsPrice}</h5>
                            </div>
                            <div className="shipping d-flex justify-content-between ">
                                <h1>{t('checkoutPage.shipping')}</h1>
                                <h5>{t('checkoutPage.calculated')}</h5>
                            </div>
                            <hr />
                            <div className="total-end d-flex justify-content-between">
                                <h1 className='fw-bold'>{t('total')}</h1>
                                <h5>usd <span className='fw-bold' >$ {itemsPrice}</span></h5>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Checkout
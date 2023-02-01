import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/ProductsData'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { availabilities, brands, colors, prices } from '../data/filteringProducts'
import { Slider } from '@mui/material'
import { MainContext } from '../context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next'
import salecamera from '../assets/img/side-image.webp'

const ProductsFiltering = () => {
    const { type } = useParams()
    const filteringProducts = products.filter((a) => a.type === type)
    const priceProducts = prices.filter((item) => item.type === type)
    let minPrice;
    let maxPrice;
    priceProducts.map((item) => minPrice = item.minPrice)
    priceProducts.map((item) => maxPrice = item.maxPrice)

    const [productList, setProductList] = useState(filteringProducts)
    const [brand, setBrand] = useState(brands.filter((item) => item.type === type))
    const [availability, setAvailability] = useState(availabilities.filter((item) => item.type === type))
    const [color, setColor] = useState(colors.filter((item) => item.type === type))
    const [selectedPrice, setSelectedPrice] = useState([minPrice,maxPrice])
    const [sortValue, setSortValue] = useState('Alphabetically,A-Z')
    const [minPrices,setMinPrices]=useState()
    const [maxPrices,setMaxPrices]=useState()
    const notify = () => toast.success("Success");
    const { addProduct,mode } = useContext(MainContext)
    const { addItem, items } = useCart()
    const { t } = useTranslation()
    const handleCheckChange = (id) => {
        const brandList = brand
        const checkFilter = brandList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setBrand(checkFilter)
    }
    const handleAvailabilityChange = (id) => {
        const availabilityList = availability
        const checkAvailability = availabilityList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setAvailability(checkAvailability)
    }
    const handleColorChange = (id) => {
        const colorList = color
        const checkColor = colorList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setColor(checkColor)
    }

    const handleChangePrice = (event) => setSelectedPrice(event.target.value)

    useEffect(() => {
        const applyFilter = () => {
            let updateList = filteringProducts
            const checkedBrand = brand.filter((item) => item.checked).map((item) => item.label.toLowerCase())
            if (checkedBrand.length) {
                updateList = updateList.filter(item => checkedBrand.includes(item.brand.toLowerCase()))
            }
            const checkedAvailability = availability.filter((item) => item.checked).map((item) => item.label.toLowerCase())
            if (checkedAvailability.length) {
                updateList = updateList.filter(item => checkedAvailability.includes(item.availability.toLowerCase()))
            }
            const checkedColor = color.filter((item) => item.checked).map((item) => item.label.toLowerCase())
            if (checkedColor.length) {
                updateList = updateList.filter(item => checkedColor.includes(item.color.toLowerCase()))
            }


            let updateMinPrice = selectedPrice[0];

            let updateMaxPrice = selectedPrice[1];

            updateList = updateList.filter((item) => item.price >= updateMinPrice && item.price <= updateMaxPrice)

            if (sortValue === 'Alphabetically,A-Z') {
                updateList = updateList.sort((a, b) => a.name > b.name ? 1 : -1)
            } else if (sortValue === 'Alphabetically,Z-A') {
                updateList = updateList.sort((a, b) => a.name > b.name ? -1 : 1)
            } else if (sortValue === 'Price,low to high') {
                updateList = updateList.sort((a, b) => a.price > b.price ? 1 : -1)
            } else if (sortValue === 'Price,high to low') {
                updateList = updateList.sort((a, b) => a.price > b.price ? -1 : 1)
            }

            setProductList(updateList)


        }
        applyFilter()
        if ( selectedPrice[0] === 389 && selectedPrice[1] === 2800 ) {
            setMinPrices(389)
            setMaxPrices(2800)
        }else if (selectedPrice[0] === 700 && selectedPrice[1] === 5500  ) {
             setMinPrices(700)
             setMaxPrices(5500)
        }else if ( selectedPrice[0] === 1099 && selectedPrice[1] === 4000 ) {
            setMinPrices(1099)
            setMaxPrices(4000)
        }else if (selectedPrice[0] === 1234 && selectedPrice[1] === 9880 ) {
             setMinPrices(1234)
             setMaxPrices(9880)
        }else if ( selectedPrice[0] === 25 && selectedPrice[1] === 270 ) {
            setMinPrices(25)
            setMaxPrices(270)
        }else if ( selectedPrice[0] === 30 && selectedPrice[1] === 350 ) {
            setMinPrices(30)
            setMaxPrices(350)
        }else if ( selectedPrice[0] === 28 && selectedPrice[1] === 80 ) {
            setMinPrices(28)
            setMaxPrices(80)
        }else if ( selectedPrice[0] === 120 && selectedPrice[1] === 350 ) {
            setMinPrices(120)
            setMaxPrices(350)
        }else if ( selectedPrice[0] === 150 && selectedPrice[1] === 2500 ) {
            setMinPrices(150)
            setMaxPrices(2500)

        }else if ( selectedPrice[0] === 220 && selectedPrice[1] === 1900  ) {
             setMinPrices(220)
             setMaxPrices(1900)
        }else if  (  selectedPrice[0] === 12 && selectedPrice[1] === 1550 )  {
             setMinPrices(12)
             setMaxPrices(1550)
        }else if (selectedPrice[0] === 190 && selectedPrice[1] === 7570 ) {
            setMinPrices(190)
            setMaxPrices(7570)
        }

    }, [brand, availability, color, selectedPrice, sortValue])
    return (
        <section className={`filter-products ${mode === 'dark' ? "bg-secondary" : "" }`}>
            <div className={`switch-home ${mode === 'dark ' ? "bg-secondary" :"" }`}>
                { mode === 'dark' ? " " : <hr /> }
                <div className={`container-fluid ${mode === 'dark' ? "text-white py-3 " : "" } `}>
                    <Link className={`${mode === 'dark' ? "text-white" : "text-secondary"}`} to='/'>{t('navbar.home')}</Link> / Filter
                </div>
                {mode === 'dark' ? "" : <hr /> }
                
            </div>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 col-xl-3 filter-part d-flex flex-column gap-4 mb-2 ">
                        <div className="row g-3">
                            <div className="col-12 col-md-6 col-xl-12 mb-3 filter-length d-flex flex-column gap-2">
                                <div className="title d-flex align-items-center gap-2 ">
                                    <div className="filter-count"></div>
                                    <h1 className={`fw-bold`}>Filter</h1>
                                </div>
                                <h1 className={`${mode === 'dark' ? "text-white" : "" }`}>{productList.length} {t('filteringProducts.products')}</h1>
                            </div>
                            <div className=" col-12 col-md-6 col-xl-12 availability-products d-flex flex-column gap-2">
                                <div className="title d-flex gap-2 align-items-center ">
                                    <div className="filter-count"></div>
                                    <h1 className='fw-bold'>{t('availability')}</h1>
                                </div>
                                {
                                    availability.map((fd) => {
                                        return <div className="check-filter">
                                            <input disabled={
                                                fd.label === 'Stock out' && productList.filter((item) => item.availability === 'Stock out').length === 0} onChange={() => { handleAvailabilityChange(fd.id) }} type="checkbox" name="" checked={fd.checked} id="" />
                                            {fd.label === 'In stock' ? <label htmlFor="" className={`${mode === 'dark' ? "text-white" : "" }`} >{t('stockcount')} <span>({productList.filter((item) => item.availability === 'In stock').length})</span> </label> : <label className={`${mode === 'dark' ? "text-white" : "" }`} htmlFor="">{t('stocknot')} <span>({productList.filter((item) => item.availability === 'Stock out').length})</span> </label>}
                                        </div>
                                    })
                                }
                            </div>
                            <div className=" col-12 col-md-6 col-xl-12 brands d-flex flex-column gap-2">
                                <div className="brand-title d-flex align-items-center gap-2">
                                    <div className="filter-count"></div>
                                    <h1 className='fw-bold'>{t('filteringProducts.brand')}</h1>
                                </div>
                                {
                                    brand.map((fd) => {
                                        return <div className="check-filter">
                                            <input onChange={() => handleCheckChange(fd.id)} type="checkbox" name="" checked={fd.checked} id={fd.id} />
                                            <label className={`${mode === 'dark' ? "text-white" : "" }`} htmlFor="">{fd.label}</label>
                                        </div>
                                    })
                                }
                            </div>
                            <div className=" col-12 col-md-6 col-xl-12 color-products d-flex flex-column gap-3">
                                <div className="color-title  d-flex align-items-center gap-2">
                                    <div className="filter-count"></div>
                                    <h1 className='fw-bold'>{t('filteringProducts.color')}</h1>
                                </div>
                                {
                                    color.map((fd) => {
                                        return <div className="check-filter">
                                            <input onChange={() => { handleColorChange(fd.id) }} type="checkbox" name="" checked={fd.checked} id="" />
                                            <label  className={`d-flex align-items-center gap-2 ${mode === 'dark' ? "text-white" : "" } `} htmlFor="">{fd.label} <div className={fd.color} ></div></label>
                                        </div>
                                    })
                                }
                            </div>
                            <div className=" col-12 col-md-6 col-xl-12 price-slider d-flex flex-column gap-5">
                                <div className="price-title d-flex align-items-center gap-2">
                                    <div className="filter-count"></div>
                                    <h1 className='fw-bold'>{t('filteringProducts.price')}</h1>
                                </div>




                                <div style={{width:"auto"}}  className="slider-price d-flex flex-column">
                                     <Slider value={selectedPrice} min={minPrices}  max={maxPrices}  aria-labelledby='range-slider' onChange={handleChangePrice} valueLabelDisplay='on' />
                                    <div className="price d-flex justify-content-between ">
                                        <h1 className='fw-bold'>Min: <span>${selectedPrice[0]}</span></h1>
                                        <h1 className='fw-bold' >Max: <span>${selectedPrice[1]}</span></h1>
                                    </div>
                                </div>




                            </div>
                            <div className="sale-camera">
                                <div className="hover-main">
                                    <div className="hoverbox d-flex justify-content-center align-items-center">
                                        <a href={`/collection/camera`}><i class="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <img src={salecamera} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-9 products-part">
                        <div className="title-sorting d-flex justify-content-between">
                            <div className="products-title d-flex align-items-center gap-2 mb-2">
                                <div className="filter-count"></div>
                                <h1 className='fw-bold'>{type.toUpperCase()}</h1>
                                <h1>({productList.length})</h1>
                            </div>
                            <div className="sorting-products d-flex align-items-center gap-2 mb-2">
                                <h1 className='fw-bold'>{t('filteringProducts.sort')}:</h1>
                                <select className={`p-1 rounded ${mode === 'dark' ? "bg-secondary text-white" : "" }`} onChange={(e) => setSortValue(e.target.value)} name="" id="">
                                    <option value="Alphabetically,A-Z">{t('filteringProducts.alpha-az')}</option>
                                    <option value="Alphabetically,Z-A">{t('filteringProducts.alpha-za')}</option>
                                    <option value="Price,low to high">{t('filteringProducts.price-lowhigh')}</option>
                                    <option value="Price,high to low">{t('filteringProducts.price-highlow')}</option>
                                </select>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center gap-4 mb-2 ">
                            {
                                productList.map((fd) => {
                                    return <div className={`card col-xl-4 ${mode === 'dark' ? "bg-secondary" : "" } `} style={{ width: "16rem" }}>
                                        <div style={{ height: "100%" }} className="image">
                                            <div className="wishlist-btn">
                                                {items.find((item) => item.id === fd.id) ? <button className='btn btn-light mt-2 mx-2'><i className='bi bi-check'></i></button> : <button onClick={() => { notify(addItem(fd)) }} className='btn btn-light mt-2 mx-2'><i className='bi bi-heart'></i></button>}
                                            </div>
                                            <div style={{ height: "100%" }} className="buttons d-flex justify-content-center align-items-end">
                                                <button disabled={fd.stockCount === 0} onClick={() => { notify(addProduct(fd)) }} className='col-6 text-center'>{t('addtocart')}</button>
                                                <Link className='text-center col-6' to={`/products/${fd.type}/${fd.name}`} >{t('quickview')}</Link>
                                            </div>
                                            <img  style={{ height: "100%" }} src={fd.image1} className="card-img-top img-fluid" alt="..." />
                                        </div>
                                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                            <Link to={`/products/${fd.type}/${fd.name}`}><h5 className={`card-title ${mode === 'dark' ? "text-white" : " " } `}>{fd.name.slice(0, 20)}...</h5></Link>
                                            <div className="price d-flex gap-2 ">
                                                <h1 className={`${mode === 'dark' ? "text-white" : "" }`} >$ {fd.price}</h1>
                                                {fd.delprice && <h1><del className={`${mode === 'dark' ? "text-white" :""}`}>$ {fd.delprice}</del></h1>}
                                            </div>
                                            <div className="rating">
                                                {
                                                    fd.review.map((a) => {
                                                        return a
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsFiltering
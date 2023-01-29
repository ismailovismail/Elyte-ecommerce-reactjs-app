import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Dashboard from '../pages/admin/Dashboard'
import AddBlog from '../pages/admin/AddBlog'
import Edit from '../pages/admin/Edit'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import { MainContext } from '../context'
import Checkout from '../pages/Checkout'
import Wishlist from '../pages/Wishlist'
import { CartProvider } from 'react-use-cart'
import ProductsFiltering from '../pages/ProductsFiltering'
import BlogLayoutPage from '../pages/BlogLayoutPage'
import BlogPage from '../pages/BlogPage'
import News from '../pages/News'
import About from '../pages/About'
import About2 from '../pages/About2'
import About3 from '../pages/About3'
import Contact from '../pages/Contact'
import Contact2 from '../pages/Contact2'
import Faq from '../pages/Faq'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Authentication from '../pages/Authentication'
import NotFoundPage from '../pages/NotFoundPage'
const AppRouter = () => {
 
 const [loggedIn,setLoggedIn]=useState(false)
  useEffect(()=>{
      
    setCartItems(
      localStorage.getItem('mycart') ? JSON.parse(localStorage.getItem('mycart')) : []
    )
  },[])
const [cartItems,setCartItems]=useState([])
const [mode,setMode]=useState("light")

const addProduct=(product)=>{
  const exist=cartItems.find((a)=>a.id === product.id)
  if (exist) {
    const newCartItems=cartItems.map((a)=>a.id === product.id ? {...exist,qty:exist.qty+1} : a);
    setCartItems(newCartItems)
    localStorage.setItem('mycart',JSON.stringify(newCartItems))
  }else{
    const newCartItems = [...cartItems,{...product,qty:1}]
    setCartItems(newCartItems)
    localStorage.setItem('mycart',JSON.stringify(newCartItems))
  }
}

const removeProduct=(product)=>{
  const exist =cartItems.find((a)=>a.id === product.id)
  if (exist.qty === 1) {
     const newCartItems=cartItems.filter((a)=>a.id !== product.id)
      setCartItems(newCartItems)
      localStorage.setItem('mycart',JSON.stringify(newCartItems))
  }else{
    const newCartItems=cartItems.map((a)=>a.id === product.id ? {...exist,qty:exist.qty-1} : a )
    setCartItems(newCartItems)
    localStorage.setItem('mycart',JSON.stringify(newCartItems))
  }
}

const remove=(product)=>{
  const newCartItems=cartItems.filter((a)=>a.id !== product.id )
  setCartItems(newCartItems)
  localStorage.setItem('mycart',JSON.stringify(newCartItems))
}
const data={
  cartItems,
 addProduct,
 removeProduct,
 remove,
 mode,
 setMode,
 loggedIn,
 setLoggedIn

}
  return (
    <>
      <BrowserRouter>
      <MainContext.Provider value={data} >
        <CartProvider>
            <Nav/>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             
               { loggedIn && <Route path='/dashboard' element={<Dashboard/>}></Route>}
              { !loggedIn && <Route path='/auth' element={<Authentication/>}/>}
              
           
             <Route path='/addblog' element={<AddBlog/>} ></Route>
             <Route path='edit/:id' element={<Edit/>} ></Route>
             <Route path='/products/:type/:name' element={<ProductDetails/>} ></Route>

             <Route path='/blog' element={<BlogLayoutPage/>}>
             <Route path=':id' element={<BlogPage/>}></Route>
             <Route path='news' element={<News/>} ></Route>
             </Route>
             
             <Route path='/mycart' element={<Cart/>} ></Route>
             <Route path='/checkout' element={<Checkout/>} ></Route>
             <Route path='/wishlist' element={<Wishlist/>}></Route>
             <Route path='/collection/:type' element={<ProductsFiltering/>} ></Route>
             <Route path='/about' element={<About/>} ></Route>
             <Route path='/about2' element={<About2/>} ></Route>
             <Route path='/about3' element={<About3/>} ></Route>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/contact2' element={<Contact2/>}></Route>
             <Route path='/faq' element={<Faq/>} ></Route>
             <Route path='/privacy' element={<Privacy/>} ></Route>
             <Route path='/terms' element={<Terms/>} ></Route>
             <Route path='*' element={<NotFoundPage/>} ></Route>
          </Routes>
            <Footer/>
            </CartProvider>
      </MainContext.Provider>
      </BrowserRouter>
      
    </>
  )
}

export default AppRouter
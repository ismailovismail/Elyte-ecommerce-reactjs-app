
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import MainSlider from '../components/MainSlider'
import TrendingProducts from '../components/TrendingProducts'
import OurProducts from '../components/OurProducts'
import speaker from '../assets/img/speaker.webp'
import OfferProducts from '../components/OfferProducts'
import NewsLetter from '../components/NewsLetter'
import Blog from '../components/Blog'
import Brands from '../components/Brands'
import { useContext } from 'react'
import { MainContext } from '../context'


const Home = () => {
  const {mode}=useContext(MainContext)
  const { t } = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]


  }
 
  return (
    <> 
    
      <section className={`collection-slider ${mode === 'dark' ? "bg-secondary": '' } `}>
        <div className="container-fluid">
          <div className="slider ">
            <Slider {...settings} >

              {
                t('collectiondata',{returnObjects:true}).map((fd) => {
                  return <div className="image d-flex flex-column justify-content-center align-items-center">
                    <img src={fd.image} alt="" />
                    <Link className={`${mode === 'dark' ? "text-white" : "" }`} to={`/collection/${fd.type}`}><h1>{fd.label}</h1></Link>
                  </div>
                })
              }

            </Slider>
          </div>
        </div>
      </section>
      <div className={`main-slider`}>
        <MainSlider />

      </div>
      <section className={`collection-cards  ${mode === 'dark' ? "bg-secondary" : ""  } `}>
        <div style={{width:"97%"}} className="container-fluid">
          <div className="row py-5 d-flex justify-content-center ">
            {
              t("collectioncards", { returnObjects: true }).map((fd) => {
                return <div data-aos='fade-up' data-aos-duration='3000' className="card p-0 col-sm-10 col-md-8 col-lg-5 col-xl-5" style={{width:"auto"}} >
                  <div className="hoverbox">
                    <div className="container-fluid">
                      <div className="title">
                        
                        <h1 className='fs-1'>{fd.title}</h1>
                      
                      </div>
                      <div className="buton">
                        <Link className='btn btn-light' to={`collection/${fd.type}`} >{fd.button}</Link>
                      </div>
                    </div>
                  </div>
                  <img className='img-fluid' src={fd.image} alt="" />
                </div>
              })
            }
          </div>
        </div>
      </section>
      <section className={`trending-products ${mode === 'dark' ? "bg-secondary" : ""  } `}>
        <div className="container-fluid">
          <TrendingProducts />

        </div>
      </section>
      <section className={`collection-watch ${mode === 'dark' ? "bg-secondary" : ""  } `}>
        <div className="colorbox">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="about col-12  col-xl-7 ">
                <div className="title-layout">
                  <h1 className={`title ${mode === 'dark' ? "text-white" : ""  } `}>{t("collectionwatch.title")}</h1>
                  <div className="line"></div>
                </div>
                <div className="maintitle-layout col-12  col-xl-6 ">
                  <h1 data-aos='fade-up' data-aos-duration='3000'  className={`main-title ${mode === 'dark' ? "text-white" : ""  } `}>{t("collectionwatch.titlemain")}</h1>
                </div>
                <div className="text-layout col-12 col-lg-7 col-xl-8">
                  <p data-aos='fade-up' data-aos-duration='3000'  className={`text ${mode === 'dark' ? "text-white" : "" } `}>{t("collectionwatch.text")}</p>
                </div>
                <Link data-aos='fade-up' data-aos-duration='3000' to={`collection/${t("collectionwatch.type")}`} className={`btn ${mode === 'dark' ? "text-white" : "" } `}>{t("collectionwatch.btn")}</Link>
              </div>
              
                <img data-aos='fade-up' data-aos-duration='3000'  className='col-12 col-lg-4  col-xl-4' src={t("collectionwatch.image")} alt="" />
            
            </div>
          </div>
        </div>
      </section>
      <section className={`our-products ${mode === 'dark' ? "bg-secondary" : "" } `}>
        <OurProducts />
      </section>
      <section className={`video ${mode === 'dark' ? "bg-secondary" : " "  } `}>
        <div className="colorbox">
          <div className="container-fluid">
            <div className="row">
              <div className="image col-12 col-lg-12 col-xl-9 ">
                <img src={speaker} alt="" />
              </div>
              <div className="text col-12 col-lg-12 col-xl-3">

                <div>
                 <div className="buttons col-5 col-sm-4 col-md-3 col-lg-2 col-xl-8">
                 <button  type="button" className="btn d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class={`bi bi-play-circle ${mode === 'dark' ? "text-white" : ""  } `}></i></button>
                  <div className="title d-flex justify-content-center">
                  <h1 className={`${mode === 'dark' ? "text-white" : ""  }`}>Feel the vibe</h1>
                </div>
                 </div>
                 
                    <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        
                  <div className="  modal-dialog modal-dialog-centered">
                    <div className=" d-flex align-items-center justify-content-center modal-content">
                      
                      <iframe className='col-12' height={400} src="https://www.youtube.com/embed/OQRRlD3Ei5k" title="Best Multipurpose Premium Shopify Theme" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                      
                    
                    </div>
                  </div>
                
                </div>
                 
                </div>
               
              </div>
            </div>  
          </div>
        </div>
      </section>
      <section className={`offer-products d-flex justify-content-center ${mode === 'dark' ? "bg-secondary" : "" } `}>
        <div style={{width:"92%"}} className="container-fluid d-flex flex-column justify-content-center">
        <OfferProducts/>
        </div>
      </section>
      <section className={`newsletter ${mode === 'dark' ? "bg-secondary" : "" } `}>
        <NewsLetter/>
      </section>
      <section className={`blog py-5 ${mode === 'dark' ? "bg-secondary" : "" } `}>
        <Blog/>
      </section>
      <section className={`brands ${mode === 'dark' ? 'bg-secondary' : "" } `}>
        
        <Brands/>
      </section>
    </>
  )
}

export default Home
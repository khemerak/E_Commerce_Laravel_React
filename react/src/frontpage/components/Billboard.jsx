import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'

export default function Billboard() {
  useEffect(() => {
    const swiper = new Swiper('.main-swiper', {
      modules: [Navigation],
      navigation: {
        nextEl: '.main-slider-button-next',
        prevEl: '.main-slider-button-prev',
      },
      loop: true,
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <div>
      <section
  id="billboard"
  className="position-relative d-flex align-items-center py-5 bg-light-gray"
  style={{
    backgroundImage: "url(src/images/banner-image-bg.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 800
  }}
>
  <div className="position-absolute end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next main-slider-button-next">
  <HiOutlineChevronRight />
  </div>
  <div className="position-absolute start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev main-slider-button-prev">
  <HiOutlineChevronLeft />
  </div>
  <div className="swiper main-swiper">
    <div className="swiper-wrapper d-flex align-items-center">
      <div className="swiper-slide">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
              <div className="banner-content">
                <h2>The Fine Print Book Collection</h2>
                <p>Best Offer Save 30%. Grab it now!</p>
                <a href="/" className="btn mt-3">
                  Shop Collection
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="image-holder">
                <img
                  src="src/images/banner-image2.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
              <div className="banner-content">
                <h2>How Innovation works</h2>
                <p>Discount available. Grab it now!</p>
                <a href="/" className="btn mt-3">
                  Shop Product
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="image-holder">
                <img
                  src="src/images/banner-image1.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
              <div className="banner-content">
                <h2>Your Heart is the Sea</h2>
                <p>Limited stocks available. Grab it now!</p>
                <a href="/" className="btn mt-3">
                  Shop Collection
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="image-holder">
                <img
                  src="src/images/banner-image.png"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

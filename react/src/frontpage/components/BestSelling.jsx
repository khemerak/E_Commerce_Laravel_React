import React from 'react'

export default function BestSelling() {
  return (
    <div>
      <section id="best-selling-items" className="position-relative padding-large ">
  <div className="container">
    <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
      <h3 className="d-flex align-items-center">Best selling items</h3>
      <a href="/" className="btn">
        View All
      </a>
    </div>
    <div className="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next product-slider-button-next">
      <svg
        className="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
        width={80}
        height={80}
      >
        <use xlinkHref="#alt-arrow-right-outline" />
      </svg>
    </div>
    <div className="position-absolute top-50 start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev product-slider-button-prev">
      <svg
        className="chevron-back-circle d-flex justify-content-center align-items-center p-2"
        width={80}
        height={80}
      >
        <use xlinkHref="#alt-arrow-left-outline" />
      </svg>
    </div>
    <div className="swiper product-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <div className="position-absolute">
              <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                10% off
              </p>
            </div>
            <img
              src="src/images/product-item1.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="index.html">House of Sky Breath</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <img
              src="src/images/product-item2.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="index.html">Heartland Stars</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <img
              src="src/images/product-item3.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="index.html">Heavenly Bodies</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <div className="position-absolute">
              <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                10% off
              </p>
            </div>
            <img
              src="src/images/product-item4.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="index.html">His Saving Grace</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <img
              src="src/images/product-item5.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="index.html">My Dearest Darkest</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card position-relative p-4 border rounded-3">
            <img
              src="src/images/product-item6.png"
              className="img-fluid shadow-sm"
              alt="product item"
            />
            <h6 className="mt-4 mb-0 fw-bold">
              <a href="/">The Story of Success</a>
            </h6>
            <div className="review-content d-flex">
              <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
              <div className="rating text-warning d-flex align-items-center">
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
                <svg className="star star-fill">
                  <use xlinkHref="#star-fill" />
                </svg>
              </div>
            </div>
            <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
            <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
              <button
                type="button"
                href="#"
                className="btn btn-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
              </button>
              <a href="#" className="btn btn-dark">
                <span>
                  <svg className="wishlist">
                    <use xlinkHref="#heart" />
                  </svg>
                </span>
              </a>
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

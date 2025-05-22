import React from 'react'

export default function LimitedOffer() {
  return (
    <div>
      <section
  id="limited-offer"
  className="padding-large"
  style={{
    backgroundImage: "url(src/images/banner-image-bg-1.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 800
  }}
>
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-md-6 text-center">
        <div className="image-holder">
          <img
            src="src/images/banner-image3.png"
            className="img-fluid"
            alt="banner"
          />
        </div>
      </div>
      <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
        <h2>30% Discount on all items. Hurry Up !!!</h2>
        <div
          id="countdown-clock"
          className="text-dark d-flex align-items-center my-3"
        >
          <div className="time d-grid pe-3">
            <span className="days fs-1 fw-normal" />
            <small>Days</small>
          </div>
          <span className="fs-1 text-primary">:</span>
          <div className="time d-grid pe-3 ps-3">
            <span className="hours fs-1 fw-normal" />
            <small>Hrs</small>
          </div>
          <span className="fs-1 text-primary">:</span>
          <div className="time d-grid pe-3 ps-3">
            <span className="minutes fs-1 fw-normal" />
            <small>Min</small>
          </div>
          <span className="fs-1 text-primary">:</span>
          <div className="time d-grid ps-3">
            <span className="seconds fs-1 fw-normal" />
            <small>Sec</small>
          </div>
        </div>
        <a href="/" className="btn mt-3">
          Shop Collection
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

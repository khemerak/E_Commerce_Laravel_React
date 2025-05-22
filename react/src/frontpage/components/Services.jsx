import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { MdOutlineGppGood, MdOutlineLocalOffer } from "react-icons/md";
import { PiMedal } from "react-icons/pi";

export default function Services() {
  return (
    <div>
      <section id="company-services" className="padding-large pb-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
        <div className="icon-box d-flex">
          <div className="icon-box-icon pe-3 pb-3">
          <BsCart3 />
          </div>
          <div className="icon-box-content">
            <h4 className="card-title mb-1 text-capitalize text-dark">
              Free delivery
            </h4>
            <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
        <div className="icon-box d-flex">
          <div className="icon-box-icon pe-3 pb-3">
          <PiMedal />
          </div>
          <div className="icon-box-content">
            <h4 className="card-title mb-1 text-capitalize text-dark">
              Quality guarantee
            </h4>
            <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
        <div className="icon-box d-flex">
          <div className="icon-box-icon pe-3 pb-3">
          <MdOutlineLocalOffer />
          </div>
          <div className="icon-box-content">
            <h4 className="card-title mb-1 text-capitalize text-dark">
              Daily offers
            </h4>
            <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
        <div className="icon-box d-flex">
          <div className="icon-box-icon pe-3 pb-3">
          <MdOutlineGppGood />
          </div>
          <div className="icon-box-content">
            <h4 className="card-title mb-1 text-capitalize text-dark">
              100% secure payment
            </h4>
            <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

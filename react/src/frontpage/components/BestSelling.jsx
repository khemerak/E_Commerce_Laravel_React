import React from 'react'
import { NavLink } from 'react-router-dom'

// import Swiper core and required modules

export default function BestSelling() {
  return (
    <div>
      <section className="position-relative padding-large">
        <div className="container">
          <div className="section-title d-flex justify-content-between align-items-center mb-4">
            <h3>Best Selling Items</h3>
            <NavLink to="/shop" className="btn btn-primary">View All</NavLink>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className="card position-relative" style={{width: '220px'}}>
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">10% off</span>
                  <img src="src/images/product-item1.png" className="card-img-top p-3" alt="Psychology of Money" />
                  <div className="card-body p-3 pt-0">
                    <h6 className="card-title">Psychology of Money</h6>
                    <p className="text-muted mb-1">Morgan Housel</p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">★★★★★</div>
                    </div>
                    <p className="text-primary fw-bold mb-0">$870</p>
                  </div>
                </div>

                <div className="card position-relative" style={{width: '220px'}}>
                  <img src="src/images/product-item2.png" className="card-img-top p-3" alt="The Two Towers" />
                  <div className="card-body p-3 pt-0">
                    <h6 className="card-title">The Two Towers</h6>
                    <p className="text-muted mb-1">J.R.R Tolkien</p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">★★★★★</div>
                    </div>
                    <p className="text-primary fw-bold mb-0">$870</p>
                  </div>
                </div>

                <div className="card position-relative" style={{width: '220px'}}>
                  <img src="src/images/product-item3.png" className="card-img-top p-3" alt="Goal Planner" />
                  <div className="card-body p-3 pt-0">
                    <h6 className="card-title">Goal Planner</h6>
                    <p className="text-muted mb-1">Lauren Asher</p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">★★★★★</div>
                    </div>
                    <p className="text-primary fw-bold mb-0">$870</p>
                  </div>
                </div>

                <div className="card position-relative" style={{width: '220px'}}>
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">10% off</span>
                  <img src="src/images/product-item4.png" className="card-img-top p-3" alt="His Saving Grace" />
                  <div className="card-body p-3 pt-0">
                    <h6 className="card-title">His Saving Grace</h6>
                    <p className="text-muted mb-1">Lauren Asher</p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">★★★★★</div>
                    </div>
                    <p className="text-primary fw-bold mb-0">$870</p>
                  </div>
                </div>

                <div className="card position-relative" style={{width: '220px'}}>
                  <img src="src/images/product-item5.png" className="card-img-top p-3" alt="The Diary of Anne Frank" />
                  <div className="card-body p-3 pt-0">
                    <h6 className="card-title">The Diary of Anne Frank</h6>
                    <p className="text-muted mb-1">Lauren Asher</p>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">★★★★★</div>
                    </div>
                    <p className="text-primary fw-bold mb-0">$870</p>
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

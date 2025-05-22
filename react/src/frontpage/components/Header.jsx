import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="top-info border-bottom d-none d-md-block ">
  <div className="container-fluid">
    <div className="row g-0">
      <div className="col-md-4">
        <p className="fs-6 my-2 text-center">
          Need any help? Call us <a href="#">+855 78545517</a>
        </p>
      </div>
      <div className="col-md-4 border-start border-end">
        <p className="fs-6 my-2 text-center">
          Summer sale discount off 60% off!{" "}
          <NavLink className="text-decoration-underline" to="/shop">
            Shop Now
          </NavLink>
        </p>
      </div>
      <div className="col-md-4">
        <p className="fs-6 my-2 text-center">
          2-3 business days delivery &amp; free returns
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

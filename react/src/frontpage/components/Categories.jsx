import React from 'react'

export default function Categories() {
  return (
    <div>
      <section id="categories" className="padding-large pt-0">
  <div className="container">
    <div className="section-title overflow-hidden mb-4">
      <h3 className="d-flex align-items-center">Categories</h3>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card mb-4 border-0 rounded-3 position-relative">
          <a href="/">
            <img
              src="src/images/category1.jpg"
              className="img-fluid rounded-3"
              alt="cart item"
            />
          </a>
          <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3">
            <a href="/" />
            <a href="/" className="text-white">
              Romance
            </a>
          </h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center mb-4 border-0 rounded-3">
          <a href="/">
            <img
              src="src/images/category2.jpg"
              className="img-fluid rounded-3"
              alt="cart item"
            />
          </a>
          <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3">
            <a href="/" />
            <a href="/" className="text-white">
              Lifestyle
            </a>
          </h6>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center mb-4 border-0 rounded-3">
          <a href="/">
            <img
              src="src/images/category3.jpg"
              className="img-fluid rounded-3"
              alt="cart item"
            />
          </a>
          <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3">
            <a href="/" />
            <a href="/" className="text-white">
              Recipe
            </a>
          </h6>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

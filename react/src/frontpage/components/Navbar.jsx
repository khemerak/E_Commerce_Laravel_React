
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="header-nav" className="navbar navbar-expand-lg py-2">
  <div className="container-fluid px-lg-5">
    <NavLink className="navbar-brand" to="/">
      <img src="src/images/main-logo.png" className="logo" />
    </NavLink>
    <button
      className="navbar-toggler d-flex d-lg-none order-3 p-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#bdNavbar"
      aria-controls="bdNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg className="navbar-icon">
        <use xlinkHref="#navbar-icon" />
      </svg>
    </button>
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="bdNavbar"
      aria-labelledby="bdNavbarOffcanvasLabel"
    >
      <div className="offcanvas-header px-4 pb-0">
        <NavLink className="navbar-brand" to="/">
          <img src="src/images/main-logo.png" className="logo" />
        </NavLink>
        <button
          type="button"
          className="btn-close btn-close-black"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          data-bs-target="#bdNavbar"
        />
      </div>
      <div className="offcanvas-body">
        <ul
          id="navbar"
          className="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1"
        >
          <li className="nav-item">
            <NavLink className="nav-link me-4 " to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link me-4" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link me-4" to="/shop">
              Shop
            </NavLink>
          </li>       
          <li className="nav-item">
            <NavLink className="nav-link me-4" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="user-items">
          <ul className="d-flex justify-content-end list-unstyled mb-0 gap-3">
            <li className="search-item">
              <a href="#" className="search-button">
                <svg className="search">
                  <use xlinkHref="#search" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg className="user">
                  <use xlinkHref="#user" />
                </svg>
              </a>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <div className="tabs-listing">
                        <nav>
                          <div
                            className="nav nav-tabs d-flex justify-content-center"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link text-capitalize active"
                              id="nav-sign-in-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-sign-in"
                              type="button"
                              role="tab"
                              aria-controls="nav-sign-in"
                              aria-selected="true"
                            >
                              Sign In
                            </button>
                            <button
                              className="nav-link text-capitalize"
                              id="nav-register-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-register"
                              type="button"
                              role="tab"
                              aria-controls="nav-register"
                              aria-selected="false"
                            >
                              Register
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade active show"
                            id="nav-sign-in"
                            role="tabpanel"
                            aria-labelledby="nav-sign-in-tab"
                          >
                            <div className="form-group py-3">
                              <label className="mb-2" htmlFor="sign-in">
                                Username or email address *
                              </label>
                              <input
                                type="text"
                                minLength={2}
                                name="username"
                                placeholder="Your Username"
                                className="form-control w-100 rounded-3 p-3"
                                required=""
                              />
                            </div>
                            <div className="form-group pb-3">
                              <label className="mb-2" htmlFor="sign-in">
                                Password *
                              </label>
                              <input
                                type="password"
                                minLength={2}
                                name="password"
                                placeholder="Your Password"
                                className="form-control w-100 rounded-3 p-3"
                                required=""
                              />
                            </div>
                            <label className="py-3">
                              <input
                                type="checkbox"
                                required=""
                                className="d-inline"
                              />
                              <span className="label-body">Remember me</span>
                              <span className="label-body">
                                <a href="#" className="fw-bold">
                                  Forgot Password
                                </a>
                              </span>
                            </label>
                            <button
                              type="submit"
                              name="submit"
                              className="btn btn-dark w-100 my-3"
                            >
                              Login
                            </button>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-register"
                            role="tabpanel"
                            aria-labelledby="nav-register-tab"
                          >
                            <div className="form-group py-3">
                              <label className="mb-2" htmlFor="register">
                                Your email address *
                              </label>
                              <input
                                type="text"
                                minLength={2}
                                name="username"
                                placeholder="Your Email Address"
                                className="form-control w-100 rounded-3 p-3"
                                required=""
                              />
                            </div>
                            <div className="form-group pb-3">
                              <label className="mb-2" htmlFor="sign-in">
                                Password *
                              </label>
                              <input
                                type="password"
                                minLength={2}
                                name="password"
                                placeholder="Your Password"
                                className="form-control w-100 rounded-3 p-3"
                                required=""
                              />
                            </div>
                            <label className="py-3">
                              <input
                                type="checkbox"
                                required=""
                                className="d-inline"
                              />
                              <span className="label-body">
                                I agree to the{" "}
                                <a href="#" className="fw-bold">
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                            <button
                              type="submit"
                              name="submit"
                              className="btn btn-dark w-100 my-3"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="wishlist-dropdown dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <svg className="wishlist">
                  <use xlinkHref="#heart" />
                </svg>
              </a>
              <div className="dropdown-menu animate slide dropdown-menu-start dropdown-menu-lg-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your wishlist</span>
                  <span className="badge bg-primary rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                    <div>
                      <h5>
                        <a href="/">The Emerald Crown</a>
                      </h5>
                      <small>Special discounted price.</small>
                      <a
                        href="#"
                        className="d-block fw-medium text-capitalize mt-2"
                      >
                        Add to cart
                      </a>
                    </div>
                    <span className="text-primary">$2000</span>
                  </li>
                  <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                    <div>
                      <h5>
                        <a href="/">The Last Enchantment</a>
                      </h5>
                      <small>Perfect for enlightened people.</small>
                      <a
                        href="#"
                        className="d-block fw-medium text-capitalize mt-2"
                      >
                        Add to cart
                      </a>
                    </div>
                    <span className="text-primary">$400</span>
                  </li>
                  <li className="list-group-item bg-transparent d-flex justify-content-between">
                    <span className="text-capitalize">
                      <b>Total (USD)</b>
                    </span>
                    <strong>$1470</strong>
                  </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center">
                  <a href="#" className="w-100 btn btn-dark mb-1" type="submit">
                    Add all to cart
                  </a>
                  <a
                    href="/"
                    className="w-100 btn btn-primary"
                    type="submit"
                  >
                    View cart
                  </a>
                </div>
              </div>
            </li>
            <li className="cart-dropdown dropdown ms-lg-2">
              <a
                href="/"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <svg className="cart">
                  <use xlinkHref="#cart" />
                </svg>
                <span className="fs-6 fw-light">(02)</span>
              </a>
              <div className="dropdown-menu animate slide dropdown-menu-start dropdown-menu-lg-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                    <div>
                      <h5>
                        <a href="/">Secrets of the Alchemist</a>
                      </h5>
                      <small>High quality in good price.</small>
                    </div>
                    <span className="text-primary">$870</span>
                  </li>
                  <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                    <div>
                      <h5>
                        <a href="/">Quest for the Lost City</a>
                      </h5>
                      <small>Professional Quest for the Lost City.</small>
                    </div>
                    <span className="text-primary">$600</span>
                  </li>
                  <li className="list-group-item bg-transparent d-flex justify-content-between">
                    <span className="text-capitalize">
                      <b>Total (USD)</b>
                    </span>
                    <strong>$1470</strong>
                  </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center">
                  <a
                    href="/"
                    className="w-100 btn btn-dark mb-1"
                    type="submit"
                  >
                    View Cart
                  </a>
                  <a
                    href="/"
                    className="w-100 btn btn-primary"
                    type="submit"
                  >
                    Go to checkout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>

  )
}

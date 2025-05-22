import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from 'react';
import SearchPopUp from './SearchPopUp';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  return (
    <>
      <nav id="header-nav" className="navbar navbar-expand-lg py-2">
        <div className="container-fluid px-lg-5">
          <NavLink className="navbar-brand" to="/">
            <img src="src/images/main-logo3.png" className="logo" />
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
            <HiOutlineBars3 />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="bdNavbar"
            aria-labelledby="bdNavbarOffcanvasLabel"
          >
            <div className="offcanvas-header px-4 pb-0">
              <NavLink className="navbar-brand" to="/">
                <img src="src/images/main-logo3.png" className="logo" />
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
                    <a className="search-button" onClick={handleSearchClick}>
                      <HiOutlineSearch />
                    </a>
                  </li>

                  <li className="wishlist-dropdown dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <HiOutlineHeart />
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
                      <HiOutlineShoppingCart />
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
    </nav >
      {isSearchOpen && <SearchPopUp onClose={() => setIsSearchOpen(false)} />}
    </>
  )
}

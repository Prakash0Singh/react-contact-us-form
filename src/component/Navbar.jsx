import React from "react";
import "./style.css";
import banner from './Logo-image.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img
              src={banner}
              alt="resturant logo"
              width="130"
              height="65"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-side" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                 className="nav-link fs-3" aria-current="page" href="#">
                Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-3" href="about-us.jsx">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-3" href="#">
                  My Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-3" href="contact-us.jsx">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner-container">
        <img
          src="https://img.freepik.com/free-vector/cartoon-indian-restaurant-background_52683-69329.jpg?w=1380&t=st=1660628427~exp=1660629027~hmac=83f3e87f50ca4417186e21548d747e7ebfc0eb44c56414595d062c944dcbe1c2"
          alt="banner for site"
        />
      </div>
    </>
  );
};

export default Navbar;

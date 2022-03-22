import React from "react";
import "scss/Footer.css";
import footerLogo from "assets/image/logo-foot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 ">
            <img src={footerLogo} alt="" />
            <p className="mt-5 my-4 mr-5 ">
              <FontAwesomeIcon icon={faMapLocationDot} />{" "}
              <span>
                Street No. 12, Newyork 12, <br /> MD - 123, USA.
              </span>
            </p>
            <p className="my-4 ">
              <FontAwesomeIcon icon={faPhone} /> <span>1.800.123.456789</span>
            </p>
            <p className="my-4 ">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>info@ecoshop.com</span>
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-5">HELPFUL LINKS</h6>
            <p>
              <a href="/">Products</a>
            </p>
            <p>
              <a href="/">Find a store</a>
            </p>
            <p>
              <a href="/">Features</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
            <p>
              <a href="/">privacy & policy</a>
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-5">SHOP</h6>
            <p>
              <a href="/">About us</a>
            </p>
            <p>
              <a href="/">Career</a>
            </p>
            <p>
              <a href="/">Shopping Method</a>
            </p>
            <p>
              <a href="/">Contact</a>
            </p>
            <p>
              <a href="/">Support</a>
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="text-white mb-5">MY ACCOUNT</h6>
            <p>
              <a href="/">Login</a>
            </p>
            <p>
              <a href="/">My Account</a>
            </p>
            <p>
              <a href="/">My Cart</a>
            </p>
            <p>
              <a href="/">Wishlist</a>
            </p>
            <p>
              <a href="/">Checkout</a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        © {new Date().getFullYear()} ecoshop All right reserved.
      </p>
    </footer>
  );
};

export default Footer;

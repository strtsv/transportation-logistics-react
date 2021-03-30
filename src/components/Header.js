import React from "react";
import $ from "jquery";

import "../assets/js/jquery.easing.1.3.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import "../assets/js/jquery.ui.totop.my.js";

import i from "../assets/images/logo-default-153x50.png";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="bg-image bg-image-1 bg-fixed">
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i}
                        alt
                        width={153}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    {}
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Trucking
                            </a>
                            {}
                            <ul className="rd-menu rd-navbar-dropdown">
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Local
                                </a>
                              </li>
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  International
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Air transportation
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Marine transportation
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="price-list.html">
                          Price list
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <section className="well-md">
          <div className="container">
            <h1>Transportation</h1>
            <h6>
              <small>and Logistics Solutions</small>
            </h6>
            <hr className="secondary" />
            <p className="text-secondary-1 fs-16 inset-1">
              We specialize in a variety of logistics services. Our aim is to
              deliver the top level of logistics based on your requests. We hope
              that with our services you will receive the most personalized help
              in transporting any kind of cargos to any distances, even
              overseas. Discover the amazing world of logistics with Trans!
            </p>
            <div className="btn-grp">
              <a className="btn btn-ripple btn-default c-button" href="#">
                Make an order
                <div className="c-ripple js-ripple">
                  <span className="c-ripple__circle" />
                </div>
              </a>
              <a className="btn btn-ripple btn-default c-button" href="#">
                Learn more
                <div className="c-ripple js-ripple">
                  <span className="c-ripple__circle" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;

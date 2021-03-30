import React from "react";

import i1 from "../../assets/images/page-1_img02.jpg";
import i2 from "../../assets/images/page-1_img03.jpg";
import i3 from "../../assets/images/page-1_img04.jpg";

class Trucking extends React.Component {
  render() {
    return (
      <section className="well-2">
        <div className="container">
          <div
            className="tabs-custom tabs-horizontal tabs-corporate"
            id="tabs-1"
          >
            {}
            <ul className="nav nav-tabs">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  href="#tabs-1-1"
                  data-toggle="tab"
                >
                  Trucking
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="#tabs-1-2" data-toggle="tab">
                  Air transportation
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="#tabs-1-3" data-toggle="tab">
                  Marine transportation
                </a>
              </li>
            </ul>
            {}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tabs-1-1">
                <div className="row flow-offset-2">
                  <div className="col-md-6 col-xl-5">
                    <div className="img-wrap">
                      <img src={i1} alt />
                    </div>
                  </div>
                  <div className="col-lg-6 offset-xl-1 text-sm-left well-3">
                    <h4>
                      Trucking and
                      <br /> Freight Transport
                    </h4>
                    <p>
                      The world is changing all around us. To continue to thrive
                      as a business over the next ten years and beyond, we must
                      look ahead, understand the trends and forces that will
                      shape our business in the future and move swiftly to
                      prepare for what's to come. We must get ready for tomorrow
                      today. That's what our future vision is all about. It
                      creates a long-term destination for our business and
                      provides us with a "Roadmap" for winning together with our
                      partners.
                    </p>
                    <h6 className="text-secondary text-uppercase">
                      Our mission is to offer high-quality Services to our
                      customers
                    </h6>
                    <p>
                      Trans has set benchmarks in safety, security, performance,
                      efficiency, punctuality, respectability, professionalism
                      and reliability in the sector. The fully trained personnel
                      with many years of background in the sector, bring a
                      wealth of experience to the company and is one of its
                      major assets.
                    </p>
                    <a
                      className="btn btn-ripple btn-secondary btn-sm c-button custom-offset-1"
                      href="#"
                    >
                      Learn more
                      <div className="c-ripple js-ripple">
                        <span className="c-ripple__circle" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-1-2">
                <div className="row flow-offset-2">
                  <div className="col-md-6 col-xl-5 pull-sm-right pull-md-left">
                    <div className="img-wrap">
                      <img src={i2} alt />
                    </div>
                  </div>
                  <div className="col-lg-6 offset-xl-1 text-sm-left well-3">
                    <h4>
                      The Rise of Air
                      <br /> Transportation
                    </h4>
                    <p>
                      Trans offers a complete range of services associated with
                      the field and provides an individual solution for each and
                      every customer, by recognizing and understanding the
                      uniqueness of each client’s requirements and needs. Trans
                      offers a comprehensive range of services - based on each
                      what our customers need.
                    </p>
                    <p>
                      Continuous improvement of processes is the cornerstone of
                      upholding and developing first class services. Trans
                      defines, measures and – if required – customizes processes
                      to achieve common targets with its clients. Innovative
                      solutions enable Trans to improve service quality and
                      enhance performance.
                    </p>
                    <p>
                      Trans offers a premium product and service for the
                      increasing number of premier customers. Its experienced
                      and dedicated staff provides tailor made services that
                      reflect a commitment to safety, efficiency and the highest
                      level of customer care.
                    </p>
                    <a
                      className="btn btn-ripple btn-secondary btn-sm c-button custom-offset-1"
                      href="#"
                    >
                      Learn more
                      <div className="c-ripple js-ripple">
                        <span className="c-ripple__circle" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tabs-1-3">
                <div className="row flow-offset-2">
                  <div className="col-md-6 col-xl-5 pull-sm-right pull-md-left">
                    <div className="img-wrap">
                      <img src={i3} alt />
                    </div>
                  </div>
                  <div className="col-lg-6 offset-xl-1 text-sm-left well-3">
                    <h4>Trucking and Freight Transport</h4>
                    <p>
                      The world is changing all around us. To continue to thrive
                      as a business over the next ten years and beyond, we must
                      look ahead, understand the trends and forces that will
                      shape our business in the future and move swiftly to
                      prepare for what's to come. We must get ready for tomorrow
                      today. That's what our future vision is all about. It
                      creates a long-term destination for our business and
                      provides us with a "Roadmap" for winning together with our
                      partners.
                    </p>
                    <h6 className="text-secondary text-uppercase">
                      Our mission is to offer high-quality Services to our
                      customers
                    </h6>
                    <p>
                      Trans has set benchmarks in safety, security, performance,
                      efficiency, punctuality, respectability, professionalism
                      and reliability in the sector. The fully trained personnel
                      with many years of background in the sector, bring a
                      wealth of experience to the company and is one of its
                      major assets.
                    </p>
                    <a
                      className="btn btn-ripple btn-secondary btn-sm c-button custom-offset-1"
                      href="#"
                    >
                      Learn more
                      <div className="c-ripple js-ripple">
                        <span className="c-ripple__circle" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trucking;

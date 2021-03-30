import React from "react";

import i1 from "../../assets/images/page-1_img05.png";
import i2 from "../../assets/images/page-1_img06.png";
import i3 from "../../assets/images/page-1_img07.png";
import i4 from "../../assets/images/page-1_img08.png";

class Partners extends React.Component {
  render() {
    return (
      <section className="well-5 border-btm">
        <div className="container">
          <h3 className="text-secondary">our partners</h3>
          <hr className="sm sm-default" />
          <p className="inset-1">
            We value our partners and believe that our program of partnership is
            very effective business tool that opens many advantages for its
            participants.
          </p>
          <ul className="row flex-list flow-offset-2 wow fadeInUp">
            <li className="col-md-6 col-xl-3">
              <a href="#">
                <img src={i1} alt />
              </a>
            </li>
            <li className="col-md-6 col-xl-3">
              <a href="#">
                <img src={i2} alt />
              </a>
            </li>
            <li className="col-md-6 col-xl-3">
              <a href="#">
                <img src={i3} alt />
              </a>
            </li>
            <li className="col-md-6 col-xl-3">
              <a href="#">
                <img src={i4} alt />
              </a>
            </li>
          </ul>
          <a className="btn-link" href="#">
            Show more
          </a>
        </div>
      </section>
    );
  }
}

export default Partners;

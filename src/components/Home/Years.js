import React from "react";
import $ from "jquery";

import i from "../../assets/images/parallax01.jpg";

class Years extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section className="section parallax-container" data-parallax-img={i} data-image-src={i}>
        <div className="parallax-content context-dark well-4">
          <div className="container">
            <div className="row flow-offset-1">
              <div className="col-md-6 col-lg-3">
                <h2 className="text-primary">49</h2>
                <p className="big">Years of experience</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h2 className="text-primary">40+</h2>
                <p className="big">Facilities in U.S. and Mexico</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h2 className="text-primary">22,000</h2>
                <p className="big">Skilled drivers in our fleet</p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h2 className="text-primary text-uppercase">2 Billion</h2>
                <p className="big">Miles driven per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Years;

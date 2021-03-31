import React from "react";

class GreatSelection extends React.Component {
  render() {
    return (
      <section className="well-1 triangle">
        <div className="container">
          {}
          <div className="row">
            <div className="col-lg-4 text-center wow fadeInLeft">
              <figure>
                <span className="overlay">
                  <span className="icon material-icons-done_all" />
                </span>
                <figcaption>
                  <h6 className="text-secondary text-uppercase">
                    <a href="#">Great Selection</a>
                  </h6>
                  <hr className="sm sm--inset-1 sm-secondary" />
                  <p className="text-secondary">
                    We have a huge selection of vehicles to meet any taste and
                    budget.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 text-center wow fadeIn">
              <figure>
                <span className="overlay">
                  <span className="icon material-icons-equalizer" />
                </span>
                <figcaption>
                  <h6 className="text-secondary text-uppercase">
                    <a href="#">High Quality</a>
                  </h6>
                  <hr className="sm sm--inset-1 sm-secondary" />
                  <p className="text-secondary">
                    Our services are only of the highest possible quality.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 text-center wow fadeInRight">
              <figure>
                <span className="overlay">
                  <span className="icon material-icons-local_offer" />
                </span>
                <figcaption>
                  <h6 className="text-secondary text-uppercase">
                    <a href="#">The Lowest Prices</a>
                  </h6>
                  <hr className="sm sm--inset-1 sm-secondary" />
                  <p className="text-secondary">
                    Low prices are the cornerstone of our vision, business idea
                    and concept.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GreatSelection;

import React from "react";

import i1 from "../../assets/images/page-1_img09.jpg";
import i2 from "../../assets/images/page-1_img10.jpg";
import i3 from "../../assets/images/page-1_img11.jpg";
import i4 from "../../assets/images/page-1_img12.jpg";

class Blog extends React.Component {
  render() {
    return (
      <section className="well-7">
        <div className="container">
          <h3 className="text-secondary">Blog</h3>
          <hr className="sm sm-default" />
          <p className="inset-1">
            Read our company blog to get to know us better
          </p>
        </div>
        <div className="container-fluid bg-primary well-6 blog">
          <div className="row no-gutters">
            <div className="col-xl-6 wow fadeInLeft">
              <article className="row row-no-gutter blog-post justify-content-center">
                <div
                  className="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6 bg-image"
                  style={{
                    backgroundImage: "url(" + i1 + ")",
                  }}
                  data-equal-group={1}
                />
                <div
                  className="col-sm-12 col-md-6 text-md-left"
                  data-equal-group={1}
                >
                  <div className="blog-post__cnt">
                    <h5>Choosing an appropriate vehicle for transportation</h5>
                    <hr className="sm sm--inset-2 sm-default" />
                    <p>
                      For any transportation company vehicles play a great role
                      in establishing high quality logistics services.
                    </p>
                    <p>
                      No wonder selecting an appropriate transportation vehicle,
                      be it a truck or a van, is a highly important task. In
                      this article James Roth, the Head of our Logistics
                      Department, will unveil some of the key principles you
                      should know about when selecting a vehicle for
                      transportation purposes.
                    </p>
                    <a className="btn-link" href="#">
                      READ MORE
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-6 wow fadeInRight">
              <article className="row row-no-gutter blog-post flex-md-row-reverse flex-xl-row justify-content-center">
                <div
                  className="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6 bg-image pull-sm-right pull-lg-left"
                  style={{
                    backgroundImage: "url(" + i2 + ")",
                  }}
                  data-equal-group={1}
                />
                <div
                  className="col-sm-12 col-md-6 text-md-left"
                  data-equal-group={1}
                >
                  <div className="blog-post__cnt">
                    <h5>Repairing a delivery truck: advice from experts</h5>
                    <hr className="sm sm--inset-2 sm-default" />
                    <p>
                      Maintaining any kind of vehicle is necessary for its
                      correct functional state. However, not all drivers pay
                      enough attention to maintaining their vehicles. It
                      concerns delivery trucks and high capacity vehicles as
                      well. In this article, our mechanics Martin Cook and James
                      Black will tell you about most popular issues among
                      beginner drivers of delivery trucks and how to avoid these
                      problems that may often lead to repair.
                    </p>
                    <a className="btn-link" href="#">
                      READ MORE
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-6 wow fadeInLeft">
              <article className="row row-no-gutter blog-post justify-content-center flex-xl-row-reverse">
                <div
                  className="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6 bg-image"
                  style={{
                    backgroundImage: "url(" + i3 + ")",
                  }}
                  data-equal-group={2}
                />
                <div
                  className="col-sm-12 col-md-6 text-md-left"
                  data-equal-group={2}
                >
                  <div className="blog-post__cnt">
                    <h5>Organizing a delivery overseas</h5>
                    <hr className="sm sm--inset-2 sm-default" />
                    <p>
                      Nowadays it seems quite unproblematic to deliver goods
                      overseas. It is true only if you deal with small cargoes,
                      otherwise successful transporting may become quite a
                      challenging task. Overseas logistics conceals a set of
                      complex measures and teamwork that eventually influences a
                      successful delivery. And these measures are vital for any
                      kind of transportation. Today we will uncover the process
                      of delivery overseas.
                    </p>
                    <a className="btn-link" href="#">
                      READ MORE
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-6 wow fadeInRight">
              <article className="row row-no-gutter blog-post flex-md-row-reverse justify-content-center">
                <div
                  className="col-sm-8 col-sm-offset-2 col-md-offset-0 col-md-6 bg-image pull-sm-right"
                  style={{
                    backgroundImage: "url(" + i4 + ")",
                  }}
                  data-equal-group={2}
                />
                <div
                  className="col-sm-12 col-md-6 text-md-left"
                  data-equal-group={2}
                >
                  <div className="blog-post__cnt">
                    <h5>Working in the field of logistics: necessary skills</h5>
                    <hr className="sm sm--inset-2 sm-default" />
                    <p>
                      American universities are extensively graduating students
                      with qualifications and diplomas in logistics. Young
                      specialists are often said to be responsible, highly
                      organized and able to solve challenging issues. But what
                      requirements do these specialists need to have to be
                      successfully employed by the world's leading logistics
                      companies? Our CEO answers this and many other questions
                      in today's article.
                    </p>
                    <a className="btn-link" href="#">
                      READ MORE
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;

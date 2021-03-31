import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="well-8 border-btm">
        <div className="container">
          <h3 className="text-secondary">Contact us</h3>
          <hr className="sm sm-default" />
          <p className="inset-1">
            We are always ready to help you. There are many ways to contact us.
            You may drop us a line, give us a call or send an email, choose what
            suits you most.
          </p>
          <div className="row custom-offset-2 justify-content-center">
            <div className="col-lg-10 col-lg-offset-1 inset-2">
              <address className="contact-info text-left">
                <dl>
                  <dt className="h6 text-primary text-uppercase">
                    Our address
                  </dt>
                  <dd>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</dd>
                  <dt className="h6 text-primary text-uppercase">Telephones</dt>
                  <dd>
                    <a href="tel:#">+1 800 603 6035</a>
                  </dd>
                  <dd>
                    <a href="tel:#">+1 800 889 9898</a>
                  </dd>
                  <dt className="h6 text-primary text-uppercase">E-mail</dt>
                  <dd>
                    <a href="mailto:#">mail@demolink.org</a>
                  </dd>
                </dl>
              </address>
              <form
                className="rd-mailform"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    className="form-input"
                    id="contact-name"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    E-Mail
                  </label>
                  <input
                    className="form-input"
                    id="contact-email"
                    type="email"
                    name="email"
                    data-constraints="@Required @Email"
                  />
                </div>
                <div className="form-group textarea">
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    id="contact-message"
                    name="message"
                    data-constraints="@Required"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group btn-wr">
                  <button
                    className="btn btn-ripple btn-secondary btn-sm c-button custom-offset-1 btn btn-ripple btn-primary btn-sm"
                    type="submit"
                  >
                    Send
                    <div className="c-ripple js-ripple">
                      <span className="c-ripple__circle" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

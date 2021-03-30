import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="well">
          <div className="container">
            <p className="rights">
              Copyright ©<span className="copyright-year" /> Trans
              Transportation Company.
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;

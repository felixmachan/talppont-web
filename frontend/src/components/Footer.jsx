import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      {/*<img className="footwave" src="/footer2.svg"></img> */}
      <div className="container-fluid footer">
        <footer
          className="d-flex flex-wrap align-items-center py-2 px-4 my-0 footer-inner"
          style={{ justifyContent: "space-between" }}
        >
          <p className="col-12 col-md-4 mb-0 ms-md-4 text-body-secondary footp footer-left">
            © 2026 TalpPont
            <br />
            <span className="developer">
              Full Stack development by Felix Machan
            </span>
          </p>

          <ul className="nav col-12 col-md-4 justify-content-end footer-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-light footp">
                Kezdőlap
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/prices"
                className="nav-link px-2 text-body-light footp"
              >
                Árak
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link px-2 text-body-light footp">
                GY.I.K
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

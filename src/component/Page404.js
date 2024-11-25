import React from "react";
import { Link } from "react-router-dom";
import "../css/Page404.css";
import { imagePath } from "../images/imagePath";

export default function Page404() {
  return (
    <>
      <div class="page-content ">
        <div
          className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center bg-img"
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay-main bg-black opacity-07" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="">Page 404</h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="page404-container">
        <div className="custom-cont">
          <div className="text-container">
            <h2>Oops! Page Not Found</h2>
            <p>We're sorry, but the page you are looking for does not exist.</p>
            <Link
              to="/"
              className="primary-btn"
              style={{
                textDecoration: "none",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * <h2>Oops! Page Not Found</h2>
          <p>We're sorry, but the page you are looking for does not exist.</p>
          <Link to="/" className="home-link">Go Back to Home</Link>
 */

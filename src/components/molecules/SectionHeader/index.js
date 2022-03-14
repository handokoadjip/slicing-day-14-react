import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <div className="row min-vh-100 pt-5">
        <div className="col-lg-6">
          <div className="wrapper d-flex align-items-center h-100">
            <div className="w-100">
              <h1 className="text-navbar fw-normal mb-5">Projects</h1>
              <nav className="text-uppercase">
                <Link className="text-fade-1 text-decoration-none me-5" to="#">
                  project
                </Link>
                <Link className="text-fade-1 text-decoration-none me-5" to="#">
                  services
                </Link>
                <Link className="text-fade-1 text-decoration-none me-5" to="#">
                  about
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="wrapper d-flex align-items-center h-100">
            <div className="w-100">
              <nav className="text-uppercase d-flex justify-content-between">
                <div className="text">
                  <Link
                    className="text-fade-1 text-decoration-none d-block fw-bold mb-5"
                    to="#"
                  >
                    new york
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none d-block fw-bold mb-5"
                    to="#"
                  >
                    london
                  </Link>
                </div>
                <div className="text">
                  <Link
                    className="text-fade-1 text-decoration-none d-block text-fade-black-1 mb-5"
                    to="#"
                  >
                    serang
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none d-block fw-bold mb-5"
                    to="#"
                  >
                    spanyol
                  </Link>
                </div>
                <div className="text">
                  <Link
                    className="text-fade-1 text-decoration-none d-block fw-bold mb-5"
                    to="#"
                  >
                    argentina
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none d-block text-fade-black-1 mb-5"
                    to="#"
                  >
                    indonesia
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

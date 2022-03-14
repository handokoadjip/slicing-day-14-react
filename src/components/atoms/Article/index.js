import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const index = (props) => {
  const className = ["col-lg-6", "d-flex", "align-items-lg-end"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <div className="wrapper ms-5">
        <h2 className="display-5 text-border-bottom-center text-capitalize fw-bold">
          {props.title}
        </h2>
        <p className="leading-loose mb-5">{props.description}</p>
        <Link className="link d-block mb-8rem fw-bold" to={props.href}>
          View Pages
          <i className="ms-3 fas fa-arrow-right"></i>
        </Link>
        <p className="text-fade-black-1 fw-bold">{props.subtitle}</p>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  href: propTypes.string,
  subtitle: propTypes.string,
};

export default index;

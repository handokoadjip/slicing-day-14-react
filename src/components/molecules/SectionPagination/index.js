import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="mt-5 pt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg justify-content-center">
          <li className="page-item disabled">
            <Link
              className="page-link border-0 bg-transparent"
              to="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link border-0 bg-transparent" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link border-0 bg-transparent" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link border-0 bg-transparent" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link border-0 bg-transparent" to="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default index;

import React from "react";
import { Link, withRouter } from "react-router-dom";
import Render from "../users/conditionalRender";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Hotel Booking App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <Render />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);

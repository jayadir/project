import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <img src="./cbit logo.png" style={{ height: "80px" }} />
          <Link className="navbar-brand fw-bold" to="/">
            CBIT Online Canteen Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
              {localStorage.getItem("isLoggedIn") === "false" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/createuser">
                      Sign up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/Cart">
                    Cart
                  </Link>
                  <Link className="nav-link" to="/pastorders">
                    Orders
                  </Link>
                  <Link
                    className="nav-link"
                    to="/Login"
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", "false");
                    }}
                  >
                    Log out
                  </Link>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

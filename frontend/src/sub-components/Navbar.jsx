import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* <a class="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <Link to='/'>Home</Link>
              {/* <a class="nav-link" href="#">
                Login
              </a> */}
              <Link to='/login'>Login</Link>
              {/* <a class="nav-link" href="#">
                Signup
              </a> */}
              <Link to='/signup'>Signup</Link>
              {/* <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

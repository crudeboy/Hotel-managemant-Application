import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Navbar.css";
function Navbar() {
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
          {/* <img  src="https://dcassetcdn.com/design_img/3334998/716591/716591_18266292_3334998_ad3eec7a_image.png" /> */}
          <i
            class="fas fa-home"
            style={{ color: "gold", fontSize: "30px" }}
          ></i>
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "pink" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem("currentUser") ? (
              <div className="dropdown mr-5">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>{" "}
                  {JSON.parse(localStorage.getItem("currentUser")).user.name}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-dark d-flex justify-content-between">
        <a className="navbar-brand text-white" href="#">Boostrap</a>
        <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

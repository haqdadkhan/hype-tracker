import React from "react";
import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar d-flex align-items-center justify-content-between jost-normal">
        <div>
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        <div className="nav-links">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#tokemonics">
            Tokenomics
          </a>
          <a className="nav-link" href="#upcoming">
            Upcoming
          </a>
          <a className="nav-link" href="#roadmap">
            Roadmap
          </a>
        </div>

        <div>
          <button className="btn btn-login">Buy Now</button>
        </div>
      </nav>
    </>
  );
}

export default Header;

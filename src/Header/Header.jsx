import React, { useState } from "react";
import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar sticky d-flex align-items-center justify-content-between">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#tokenomics">
            Tokenomics
          </a>
          <a className="nav-link" href="#upcoming-features">
            Upcoming
          </a>
          <a className="nav-link" href="#roadmap">
            Roadmap
          </a>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn btn-login">Buy Now</button>

          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

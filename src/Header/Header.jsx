import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // For detecting outside clicks

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className="navbar d-flex align-items-center justify-content-between">
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
          <button className="nav-btn">Buy Now</button>

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

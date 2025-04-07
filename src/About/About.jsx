import React from "react";
import "./About.css";
import AboutImg from "../assets/about/about-img.png";

function About() {
  return (
    <>
      <section id="about" className="py-5 mt-5">
        <div className="container">
          <div className="row d-flex text-white">
            <div className="col-lg-6">
              <img src={AboutImg} alt="About Image" width={500} />
            </div>
            <div className="col-lg-6 align-content-center">
              <span className="self-btn mb-4">About Us</span>
              <h1 sec-heading>Introducing Hype Tracker</h1>
              <p className="sec-para">
                Hype Tracker is a cutting-edge trading bot designed to give you
                the ultimate edge in the market. It scans over 27,000+ trusted
                KOL channels, tracks live Ethereum pairs, and integrates
                advanced security protocols to provide real-time insights.
                Whether you're an experienced trader or just starting, Hype
                Tracker equips you with the tools needed to make informed
                decisions and stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

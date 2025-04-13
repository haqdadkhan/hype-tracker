import React from "react";
import "./About.css";
import AboutImg from "../../assets/about/about-img.png";

function About() {
  return (
    <>
      <section id="about" className="py-5 mt-5">
        <div className="container">
          <div className="row d-flex flex-column-reverse flex-lg-row text-white align-items-center">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="900" className="col-lg-7 d-flex justify-content-center">
              <img src={AboutImg} alt="About" className="about-img" />
            </div>
            <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="900" className="col-lg-5 text-center text-lg-start mt-4 mt-lg-0">
              <span className="self-btn">About Us</span>
              <h1 className="sec-heading my-2">Introducing Hype Tracker</h1>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="900" className="sec-para">
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

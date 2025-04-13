import React from 'react'
import "./Footer.css"
import x from "../../assets/footer/x.svg"
import telegram from "../../assets/footer/telegram.svg"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="overflow-hidden">
      <div className="container">
        {/* Top Section */}
        <div className="p-3 p-md-5 before-footer mb-4 mb-md-5">
          <div className="row">
            <div className="col-12 col-md-6 left-side align-content-center justify-content-md-center text-center text-md-start mb-4 mb-md-0">
              <p className="join-title">Join Us <span>Today!</span></p>
              <p className="join-subtitle">Stay connected with us by joining us on our socials!</p>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-3 align-content-center justify-content-md-center align-items-center align-items-md-start text-center text-md-start align-items-md-end">
              <button className='footer-btn'>Join Community</button>
              <button className='footer-btn-w'>Buy Now</button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="row gy-4">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="brand-title">Hype Tracker</h3>
            <p className='footer-links'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, reiciendis.</p>
            <div className="social-links">
              <a href='#/'>
                <img src={x} alt="X" />
              </a>
              <a href='#/' className='mx-3'>
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Company</h5>
            <div className="d-flex flex-column">
              <a href="#about" className='footer-links text-decoration-none'>About</a>
              <a href="#tokenomics" className='footer-links text-decoration-none'>Tokenomics</a>
              <a href="#roadmap" className='footer-links text-decoration-none'>Roadmap</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Features</h5>
            <div className="d-flex flex-column">
              <a href="#features" className='footer-links text-decoration-none'>Key Features</a>
              <a href="#completed-features" className='footer-links text-decoration-none'>Completed Features</a>
              <a href="#upcoming-features" className='footer-links text-decoration-none'>Upcoming Features</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Policy</h5>
            <div className="d-flex flex-column">
              <a href="#/" className='footer-links text-decoration-none'>Terms of Use</a>
              <a href="#/" className='footer-links text-decoration-none'>Privacy Policy</a>
              <a href="#/" className='footer-links text-decoration-none'>Refund Policy</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Contact</h5>
            <div className="d-flex flex-column">
              <a href="mailto:info@hypetracker.io" className='footer-links text-decoration-none'>info@hypetracker.io</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='my-3 my-md-4' />

        {/* Copyright */}
        <div className='text-center py-2'>
          <span className='copyright'>Copyright &copy; {currentYear} Hype Tracker. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

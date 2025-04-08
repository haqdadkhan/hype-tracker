import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="container">
        {/* Top Section */}
        <div className="row p-3 p-md-5 before-footer mb-4 mb-md-5">
          <div className="col-12 col-md-6 left-side mb-4 mb-md-0">
            <p className="join-title">Join Us <span>Today!</span></p>
            <p className="join-subtitle">Stay connected with us by joining us on our socials!</p>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-3 align-content-center justify-content-md-center align-items-md-end">
            <button className='footer-btn'>Join Community</button>
            <button className='footer-btn-w'>Buy Now</button>
          </div>
        </div>

        {/* Links Section */}
        <div className="row gy-4">
          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="brand-title">Hype Tracker</h3>
            <p className='footer-links'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, reiciendis.</p>
            <div className="social-links">
              <span>X</span>
              <span>Telegram</span>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Company</h5>
            <div className="d-flex flex-column gap-2">
              <a href="#about" className='footer-links text-decoration-none'>About</a>
              <a href="#features" className='footer-links text-decoration-none'>Key Features</a>
              <a href="#completed-features" className='footer-links text-decoration-none'>Completed Features</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title invisible">Links</h5>
            <div className="d-flex flex-column gap-2">
              <a href="#upcoming-features" className='footer-links text-decoration-none'>Upcoming Features</a>
              <a href="#tokenomics" className='footer-links text-decoration-none'>Tokenomics</a>
              <a href="#roadmap" className='footer-links text-decoration-none'>Roadmap</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Policy</h5>
            <div className="d-flex flex-column gap-2">
              <a href="#/" className='footer-links text-decoration-none'>Terms of Use</a>
              <a href="#/" className='footer-links text-decoration-none'>Privacy Policy</a>
              <a href="#/" className='footer-links text-decoration-none'>Refund Policy</a>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <h5 className="section-title">Contact</h5>
            <div className="d-flex flex-column gap-2">
              <a href="mailto:info@hypetracker.io" className='footer-links text-decoration-none'>info@hypetracker.io</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='my-3 my-md-4' />

        {/* Copyright */}
        <div className='text-center py-2'>
          <span className='copyright'>Copyright &copy; 2024 Hype Tracker. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

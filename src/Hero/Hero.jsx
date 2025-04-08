import React from 'react'
import "./Hero.css"
import LargeEclipse from "../assets/home/eclipse-circle-large.png"
import ShortEclipse from "../assets/home/eclipse-circle-short.png"
import BlueEclipse from "../assets/home/blue-dots.png"
import GreenEclipse from "../assets/home/green-dots.png"
import PurpleCircle from "../assets/home/purple-circle.png"
import BlueCircle from "../assets/home/blue-circle.png"
import Dots from "../assets/home/white-dots.png"
import Logo from "../assets/logo.png"

function Hero() {
  return (
    <>
      <section id='home' className='mb-5'>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center position-relative overflow-hidden" style={{ height: "410px" }}>
            <img src={LargeEclipse} alt="" className="position-absolute" />
            <img src={ShortEclipse} alt="" className="position-absolute" />
            <img src={BlueEclipse} alt="" className="position-absolute" />
            <img src={GreenEclipse} alt="" className="position-absolute" />
            <img src={PurpleCircle} alt="" className="position-absolute" />
            <img src={BlueCircle} alt="" className="position-absolute" />
            <img src={Logo} alt="" className="position-absolute" />
          </div>
          <div className="curve">
            <div className="self-container">
              <div className="row">
                <div className="col-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.</div>
                <div className="col-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.</div>
              </div>
            </div>
            <div className='d-flex flex-column text-center'>
              <h1>Empowering Your Crypto Trading Experience</h1>
              <div className="d-flex gap-3 align-content-center justify-content-md-center align-items-md-end">
                <button className='hero-btn'>Try the Bot</button>
                <button className='hero-btn-w'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

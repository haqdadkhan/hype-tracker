import React from 'react'
import "./Roadmap.css"
import P1 from "../assets/roadmap/roadmap-img1.png"
import P2 from "../assets/roadmap/roadmap-img2.png"
import P3 from "../assets/roadmap/roadmap-img3.png"
import P4 from "../assets/roadmap/roadmap-img4.png"
import arrow from "../assets/roadmap/roadmap-arrow.png"
import framer from "../assets/roadmap/roadmap-framer.png"

const roadmaps = [
  {
    id: 1,
    img: P1,
    title: "Phase 01",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam."
  },
  {
    id: 2,
    img: P2,
    title: "Phase 02",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam."
  },
  {
    id: 3,
    img: P3,
    title: "Phase 03",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam."
  },
  {
    id: 4,
    img: P4,
    title: "Phase 04",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam."
  },
];
function Roadmap() {
  return (
    <>
      <section id="roadmap" className="">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div className="sec-width align-items-center text-center mb-5">
              <span className="self-btn">Roadmap</span>
              <h2 className='sec-heading mt-2'>Hype Tracker Journey</h2>
              <p className='sec-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="roadmap-phases">
            <div className="phase phase-1 abs">
              <div>
                <img src={P1} alt="" />
              </div>
              <span><img src={framer} alt="" /></span>
              <h5>Phase 01</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi aliquid consequuntur corporis necessitatibus culpa.</p>
            </div>
            <div className="phase phase-2 abs">
              <div>
                <img src={P2} alt="" />
              </div>
              <span><img src={framer} alt="" /></span>
              <h5>Phase 02</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi aliquid consequuntur corporis necessitatibus culpa.</p>
            </div>
            <div className="phase phase-3 abs">
              <div>
                <img src={P3} alt="" />
              </div>
              <span><img src={framer} alt="" /></span>
              <h5>Phase 03</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi aliquid consequuntur corporis necessitatibus culpa.</p>
            </div>
            <div className="phase phase-4 abs">
              <div>
                <img src={P4} alt="" />
              </div>
              <span><img src={framer} alt="" /></span>
              <h5>Phase 04</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, animi aliquid consequuntur corporis necessitatibus culpa.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap

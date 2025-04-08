import React from "react";
import "./Features.css"
import F1 from "../assets/features/feature-1.png";
import F2 from "../assets/features/feature-2.png";
import F3 from "../assets/features/feature-3.png";
import F4 from "../assets/features/feature-4.png";
import done from "../assets/features/done.png"

// key features
const featureCards = [
  {
    id: 1,
    img: F1 ,
    content: "Real-time market tracking of Ethereum pairs",
  },
  {
    id: 2,
    img: F2 ,
    content: "Advanced security protocols to protect your assets",
  },
  {
    id: 3,
    img:  F3 ,
    content: "Scans and monitors 27,000+ trusted KOL channels",
  },
  {
    id: 4,
    img:F4,
    content: "Real-time data to enhance your trading strategy",
  },
];
// completed features
const completedFeatures = [
  {
    id: 1,
    img: done ,
    content: "Basic Version of the Telegram Bot",
  },
  {
    id: 2,
    img: done ,
    content: "Security Feature Plugin Integration",
  },
  {
    id: 3,
    img:  done ,
    content: "AI-Powered Market Analysis Tools",
  },
  {
    id: 4,
    img:done,
    content: "1H and 24H Stats Tracker",
  },
];

function Features() {
  return (
    <>
      <section id="features" className="py-5 mt-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center mb-5">
            <span className="self-btn">Key Features</span>
            <h2 sec-heading>Key Features</h2>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            {featureCards.map((card) => (
              <div key={card.id} className="col-md-6 col-lg-3">
                <div className="h-100 border-0 bg-transparent">
                  <div className="text-center p-4">
                    <img
                      src={card.img}
                      alt="Feature icon"
                      className="mb-4 card-img"
                    />
                    <p className="card-text">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pt-5 mt-5">
          <div className="d-flex flex-column align-items-center mb-5">
            <span className="self-btn">Completed Features</span>
            <h2 sec-heading>Completed Features</h2>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            {completedFeatures.map((card) => (
              <div key={card.id} className="comp-card col-md-6 mx-4 col-lg-3">
                <div className="h-100 border-0 bg-transparent">
                  <div className="text-center p-4">
                    <img
                      src={card.img}
                      alt="Feature icon"
                      className="mb-4 comp-img"
                    />
                    <p className="comp-text">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

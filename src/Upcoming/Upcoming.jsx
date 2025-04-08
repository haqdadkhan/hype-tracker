import React from 'react'
import "./Upcoming.css"
import F1 from "../assets/upcoming/feature-1.png";
import F2 from "../assets/upcoming/feature-2.png";
import F3 from "../assets/upcoming/feature-3.png";
import F4 from "../assets/upcoming/feature-4.png";
import F5 from "../assets/upcoming/feature-5.png";
import F6 from "../assets/upcoming/feature-6.png";
import F7 from "../assets/upcoming/feature-7.png";
import F8 from "../assets/upcoming/feature-8.png";

// upcoming features
const upcomingFeatures = [
  {
    id: 1,
    img: F1,
    type: "Features",
    title: "Hype Tracker AI Caller Bot",
    content: "Automated alerts based on AI-driven market analysis.",
  },
  {
    id: 2,
    img: F2,
    type: "Features",
    title: "Automated Buying/Selling Tool",
    content: "Execute trades seamlessly with automated strategies.",
  },
  {
    id: 3,
    img: F3,
    type: "Features",
    title: "Holder Analysis",
    content: "Explore the top 10 contract holders and supply percentages through visually appealing pie charts, allowing you to understand the distribution dynamics of a token.",
  },
  {
    id: 4,
    img: F4,
    type: "Features",
    title: "Ad Implementation",
    content: "In-app ads for enhanced engagement and visibility.",
  },
  {
    id: 5,
    img: F5,
    type: "Features",
    title: "Revenue Sharing Program",
    content: "Profit-sharing model for token holders.  ",
  },
  {
    id: 6,
    img: F6,
    type: "Features",
    title: "Group Integration",
    content: "Custom group integration for personalized trading environments.  ",
  },
  {
    id: 7,
    img: F7,
    type: "Features",
    title: "Premium Bot Access",
    content: "Unlock advanced features and premium tools with paid access.  ",
  },
  {
    id: 8,
    img: F8,
    type: "Features",
    title: "Advanced Tools",
    content: "Cutting-edge features to refine your trading strategy and maximize returns.",
  },
];

function Upcoming() {
  return (
    <>
      <section id="upcoming-features" className="py-5 mt-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div className="sec-width align-items-center text-center mb-5">
              <span className="self-btn">Features</span>
              <h2 className='sec-heading mt-2'>Hype Tracker <br />Upcoming Features</h2>
              <p className='sec-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          {upcomingFeatures.map((feature) => (
              <div key={feature.id} className="row mb-5 align-items-center flex-column flex-md-row">
              <div className="col-md-5 up-card-img position-relative">
                <img
                  src={feature.img}
                  alt="Feature icon"
                  className="img-fluid rounded-3"
                />
                <span>{feature.id}</span>
              </div>
              <div className="col-md-6 px-md-5 align-self-center mt-4 mt-md-0">
                <span className='self-btn'>Features</span>
                <h2 className='feat-heading mt-3'>{feature.title}</h2>
                <p className="mt-3 sec-para">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Upcoming

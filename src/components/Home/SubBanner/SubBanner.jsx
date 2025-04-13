import React from 'react'
import "./SubBanner.css"
import P1 from "../../../assets/home/uniswap.png"
import P2 from "../../../assets/home/etherscan.png"
import P3 from "../../../assets/home/dextools.png"
import P4 from "../../../assets/home/coinmarketcap.png"

function SubBanner() {
    return (
        <>
            <div className="downside py-5 py-md-5">
                <div className="container">
                    {/* Top Text Row */}
                    <div className="row justify-content-between mb-4 mb-md-5">
                        <div className="col-5 mb-3 mb-md-0 text-center text-md-start">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.
                            </p>
                        </div>
                        <div className="col-5 text-center text-md-end">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.
                            </p>
                        </div>
                    </div>

                    {/* banner Content */}
                    <div className='banner-content text-center px-2 px-md-0'>
                        <h1 className='banner-heading my-4 my-md-5 display-4 display-md-3 fw-bold'>
                            Empowering Your Crypto <br className="d-none d-md-block" />
                            <span className="text-primary">Trading Experience</span>
                        </h1>
                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                            <button className='banner-btn px-4 py-2 px-md-5 py-md-3'>
                                Try the Bot
                            </button>
                            <button className='banner-btn-w px-4 py-2 px-md-5 py-md-3'>
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Platforms */}
                    <div className="platforms row g-3 g-md-4 mt-5 pt-5 mt-md-5">
                        {[P1, P2, P3, P4].map((platform, index) => (
                            <div key={index} className="col-6 col-md-3 d-flex justify-content-center">
                                <a href="#/" className='align-content-center'>
                                    <img
                                        src={platform}
                                        className="img-fluid platform-img"
                                        alt={`Platform ${index + 1}`}
                                        style={{ maxHeight: '60px', width: 'auto' }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubBanner

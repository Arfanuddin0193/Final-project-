import Aos from 'aos';
import React, { useEffect } from 'react'
import './portfolio.css'

const Portfolio = () => {
    useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
    return (
        <div className="portfolio container-fluid" data-aos="fade-down">
            <div className="our-work">
                <h1 className="display-3 text-center">Our Work</h1>
            </div>
            <div className="container portfolio-card">
                <div className="row scroll">
                    <div className="image-container col-sm-4">
                        <div className="image-inner-container">
                            <div className="image">
                                <a href="https://aveneur.com/#/">
                                    <img src={process.env.PUBLIC_URL + "/images/screencapture-aveneur.png"} alt="aveneur"/>
                                </a>
                            </div>
                        <p>Aveneur Solutions</p>
                        </div>
                    </div>
                    <div className="image-container col-sm-4">
                        <div className="image-inner-container">
                            <div className="image">
                                <a href="https://senoark.org/#/">
                                    <img src={process.env.PUBLIC_URL + "/images/screencapture-senoark.png"} alt="senoark"/>
                                </a>
                            </div>
                        <p>Senoark</p>
                        </div>
                    </div>
                    <div className="image-container col-sm-4">
                        <div className="image-inner-container">
                            <div className="image">
                                <a href="https://betahomeland.aveneur.com/">
                                    <img src={process.env.PUBLIC_URL + "/images/screencapture-homeland.png"} alt="homeland"/>
                                </a>
                            </div>
                        <p>Homeland</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

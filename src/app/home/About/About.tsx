import React, { useEffect } from "react";
import '../../custom.css';
import Rellax from "rellax";
import { Link } from "react-router-dom";

const About = () => {

  useEffect(() => {
    new Rellax(".animate", {
      speed: 11,
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".animate2", {
        speed: 5,
        center: false,
        round: true,
        vertical: true,
        horizontal: false
      });

      new Rellax(".animate3", {
        speed: 11,
        center: false,
        round: true,
        vertical: true,
        horizontal: false
      });

    
  }, []);
  

    return (
        <section>
            <div className="about-section">
            <div className=" welcometoc">
                                                   
                    <p>We don't just deliver a product, we deliver a whole experience.</p>
                    <Link style={{textDecoration: 'none', color: 'goldenrod'}} to="/about">
                        <button className="aboutbutton">
                            <span>Read More</span>
                        </button>
                    </Link>
                </div>
                <div  className="aboutimgdesk animate">
                        <img src="images/BuildA.png" />
                </div>
                <div className="aboutimgmobile animate2">
                        <img src="images/BuildA.png" />
                </div>
                <div className="aboutimgipad animate3">
                        <img src="images/BuildA.png" />
                </div>
            </div>

        </section>
    )
}


export default About

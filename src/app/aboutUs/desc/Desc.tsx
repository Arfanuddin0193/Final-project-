import React, { useEffect } from "react";
import "../../custom.css";
import "../about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Rellax from "rellax";

function Desc() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    new Rellax(".animate", {
      speed: 10,
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <section>
      <div className="about-container row">
        <div className="upperGrid">
          <div className="description" data-aos="fade-right">
            <p data-aos="fade-up">
              Aveneur Solutions is an aesthetic-first web design, digital
              content and software development company - serving businesses both
              large and small. We are a creative IT company that provides
              a diverse set of services tailored to your specific needs.
              We also promote innovation, develop ideas into reality and provide
              opportunities for businesses to grow.
            </p>
          </div>
        
        
        <div className="majhkhan">
          <div data-aos="fade-left">
            <img src="images/abouttopi.png" />
          </div>
        </div>
        </div>
        
        <div className="gridContainer">
        <div className="aboutcontent" data-aos="fade-right" >
          <div data-aos="fade-up">
          <h2>Mission</h2>
            <p>
              Our mission is to provide the highest-grade, bespoke web,
              application, software and technological solutions to its valued
              client base at an affordable and time efficient manner. We provide
              services to all type of companies from solo bloggers to large
              enterprises.
            </p>
          </div>
        </div>
        <div className="aboutcontent" data-aos="fade-left">
          <div data-aos="fade-up">
          <h2>Vision</h2>
            <p>
              We are on a journey to expand and grow into a ubiquitously trusted
              name in the fields of digital design and technology. In time,
              Aveneur Solutions shall span the globe to provide its digital development
              and technology transfer services in major markets of the world
              over, such as the United Kingdom, Singapore and the United States.
              The core values of the company shall always be integrity and
              social responsibility.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Desc;

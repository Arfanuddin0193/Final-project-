import './design.css';
import Navbar from '../home/Nav/Navbar';
// import data from './images/data.jpg'
import D1 from "./d1"
import D2 from "./d2"
import D3 from "./d3"
import D4 from "./d4"
import D5 from "./d5"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import React from 'react';

function Design() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="Design">
             <Navbar />
            
        <section className="mt-5 section_1" data-aos="fade-in">
          <div className="container cont2">
          <div className="row p-5">
            <div className="col-md-6 text-center my-auto p-5">

              <p className="font-weight-bold h3">Our visual service</p>
              <p className="h6">Our designing team of creative minds explore new ideologies through the challenges our
              clients provide us. We use various visualisation tools like the ones provided by Adobe Creative Suite to
              meet the need of our clients.</p>
            </div>
            <div className="col-md-6 text-center">
              <D2 />
            </div>
          </div>
        </div>
      </section>
      <section className=" section_1"  data-aos="fade-up">
          <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-md-6 text-center my-auto">
              <p className="font-weight-bold h3">Multiple Packages</p>
              <p className="h6">We provide many bundles of services for you to ease you into choosing us for doing your work 
              at reasonable prices.</p>

            </div>
            <div className="col-md-6 text-center">
              <D1/>
            </div>
          </div>
        </div>
      </section>
      <section className="section_1" data-aos="fade-up">
        <div className="container text-center">
          <p className="mb-5 title h3">WHY CHOOSE US?</p>
          <div className="row p-5">
            <div className="col-md-4">

              <D3/>
              <h3>Research</h3>
              <p className="h6">Our team conducts research on human-computer interraction after we receive the requirements
                and before we start the project for the best outcome.
              </p>
            </div>
             <div className="col-md-4">
              <D4/>
              <h3>Protoyping/ Reviews</h3>
              <p className="h6">We seek for scopes of continuous improvement along with our clients while still in the 
              prototyping phase before finalizing the design. Thus, enabling our clients to be open about the changes 
              to be made. </p>
            </div>
             <div className="col-md-4">
              <D5/>
              <h3>Precision Design</h3>
              <p className="h6">The finalized design is hand-drawn on a digital tool from scratch and polished for delivery to 
                our customers.</p>
            </div>
          </div>
        </div>
      </section>               
    </div> 
   
  );
}

export default Design;

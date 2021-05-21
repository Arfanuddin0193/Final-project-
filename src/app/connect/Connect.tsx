/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import Navbar from "../home/Nav/Navbar";
import "./connect.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";

function Connect() {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <>
      <Navbar />
      <section className="connect">
        <div className="row">
          <div className="col-md-6 left">
            <img src="./images/logo.png" className="img-fluid mx-auto d-block mt-5" width="300px" height="200px" alt="" data-aos="fade-down"/>
            <h2 className="mb-5" style={{color: "#0a7d7d"}} data-aos="fade-right">CONNECT WITH US</h2>
            <div className="para1 row1">
              <i className="fa fa-envelope d-flex" style={{color: "#0a7d7d"}} aria-hidden="true"><p className="ml-1" style={{color: "#0a7d7d"}} data-aos="fade-left">connect@aveneur.com</p></i>
            </div>
            <div className="para1 row1">
              <i className="fa fa-phone d-flex" style={{color: "#0a7d7d"}} aria-hidden="true"><p className="ml-1" style={{color: "#0a7d7d"}} data-aos="fade-left">+8801550076858</p></i>
            </div>
            <div className="para1 row1">
              <i className="fa fa-map-marker d-flex" style={{color: "#0a7d7d"}} aria-hidden="true"><p className="ml-1" style={{color: "#0a7d7d"}} data-aos="fade-left">326 West Polashbag, DIT Road, Dhaka 1219</p></i>
            </div>
          </div>

          <div className="col-md-6 right" data-aos="zoom-in">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d351.9677699550711!2d90.41907257471505!3d23.762844540659852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzQ1LjgiTiA5MMKwMjUnMDguOCJF!5e0!3m2!1sen!2sbd!4v1606106063601!5m2!1sen!2sbd"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="career" style={{height: "40vh"}}>
      <div className="container-lg-12 container-md-12 container-sm-12 container-xl-12 p-5 text-center cont h-100">
          
            <h2 className="mt-2 choto" data-aos="fade-down">Work with us!</h2>
         
         
            <Link className="example_d mt-4" style={{textDecoration: "none"}} to="/Careers">
              Browse Openings
            </Link>
         
        </div>  
      </section>
    </>
  );
};

export default Connect;

import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "./Nav/Navbar";
import Quote from "./Quote/Quote";
// import Footer from "./Footer/Footer";
import Service from "./Service/Service";
import About from "./About/About";


function Home() {
  return (
    <div>
      <section className="top-section">
        <div className="header-section">
          <Navbar />
          <Banner />
        </div>
      </section>

      <About />
      <Service
        type="design"
        header="Design"
        subheader="See what has never been seen before"
        bgimg="/images/1.jpeg"
        slogan="Make intelligence Visible"
        url="design"
      />
      <Service
        type="develop"
        header="Develop"
        subheader="We build stuff that doesn't break"
        bgimg="/images/2.jpeg"
        slogan = "Bring imagination to life"
        url="develop"
      />
        <Service
        type="innovate"
        header="Innovate"
        subheader="There are inifinte ways to do a thing. Our job is to find infinite solutions."
        bgimg="/images/3.jpeg"
        slogan="A way to do it better"
        url="innovate"
      />
      <Quote/>
      
    </div>
  );
}

export default Home;

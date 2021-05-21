import React from "react";
import './careers.css'
import Navbar from "../home/Nav/Navbar";
// import JobApplication from "./JobApplication"

function Careers() {
  return (
    <div className="Careers" style={{height: "100vh"}}>
        <Navbar />
          <h2 className="jobHead display-6 p-3">No openings to display</h2>
        
          {/* <JobApplication/> */}
    </div> 
   
  );
}

export default Careers;
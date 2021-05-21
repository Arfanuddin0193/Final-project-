import React, {useEffect} from "react";
import DevelopSvg from "./DevelopSvg";
import Aos from "aos";
import "aos/dist/aos.css";

  
const Description = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div >
      <div className="row px-5" style={{height: "fit-content", alignItems: 'center'}}>
        <div className="col-md-6 txtdev" data-aos="fade-left">
          At Aveneur, we provide high quality Softwares and Solutions through Test Automation, Quality
          Assurance and Agile Processes. Our success in Software/Application development is achieved through
          effective collaboration between the Stakeholders. We tackle any changes made through our effective
          set of Procedures to overcome the challenges in an organised way. We encourage external participants 
          to review our projects to bring out a diverse perspective of the software to ensure quality.
        </div>
        <div className="col-md-6" data-aos="fade-right">
          <DevelopSvg />
        </div>
      </div>
    </div>
  );
};

export default Description;

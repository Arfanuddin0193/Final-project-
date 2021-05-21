import React from "react";
import { Link } from "react-router-dom";
import ServiceSvg from "./ServiceSvg";
import ServiceSvg2 from "./ServiceSvg2";
import ServiceSvg3 from "./ServiceSvg3";

interface IProps {
  type: string;
  header: string;
  subheader: string;
  bgimg: string;
  slogan: string;
  url: string;
}

const Service: React.FC<IProps> = ({
  type,
  header,
  subheader,
  bgimg,
  slogan,
  url,
}) => {
  const background = {
    background: `url(${process.env.PUBLIC_URL + bgimg}` ,
    width:"100vw",
    
  };
  var section = 0;

  const design = [
    "Logo ",
    "UI/UX ",
    "Business Card ",
    "Book and Magazine Cover",
    "Product ",
    "Packaging and label ",
    "Brochure and flyer ",
  ];

  const develop = [
    "Blog Websites ",
    "E-Commerce ",
    "ERP ",
    "Native Application Development",
    "(Android/ios)",
  ];
  const innovate = [
    "Business Consultancy ",
    "Digital Consultancy ",
    "Cloud Migration ",
    "Image Processing ",
    "AI Chatbot Integration ",
    "and more",
  ];
  let services: string[] = [];
  switch (type) {
    case "design":
      section = 1;
      services = design;
      break;
    case "develop":
      section = 2;
      services = develop;
      break;
    case "innovate":
      section = 3;
      services = innovate;
      break;
  }
  return (
    <div className={`service-section${type === "develop" ? 2 : 1}`}>
      <div className={`service${type === "develop" ? 2 : 1}`}>
        <div className={`service-info${type === "develop" ? 2 : 1}`}>
          <div className="info-img">
            <div>
              {section === 1 && <ServiceSvg />}
              {section === 2 && <ServiceSvg2 />}
              {section === 3 && <ServiceSvg3 />}
            </div>
          </div>

          <div className="info">
            <h2 className="info-h">{header}</h2>
            <h3 className="info-p">{subheader}</h3>
          </div>
        </div>
        <div className={`service-slide${section}`} style={background}>
          <div className="handle"></div>
          <div className="overlay">
            <div className="content">
              <p>{slogan}</p>
              <ul>
                {services.map((service: string) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <button className="button">
                <svg height="65" width="320">
                  <rect className="shape" height="60" width="320" />
                </svg>
                <div className="btn-service-slide-text "><Link to={url}> READ MORE </Link></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

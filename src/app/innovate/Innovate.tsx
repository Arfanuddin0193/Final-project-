import React, {useEffect} from 'react';
import Navbar from "../home/Nav/Navbar";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Innovate = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    return (
        <><Navbar />
            <div className="innomain row" >
                <div className="innoleft col-md-6">
                    <p>
                        What is now proved was once only imagined.
                        Changes call for innovation and innovation leads to progress.
                    </p>
                    <ul data-aos="fade-right">
                        <li>Business consultancy</li>
                        <li>Security System</li>
                        <li>Cloud Migration</li>
                        <li>Data Mining</li>
                        <li>AI Chatbot Integration</li>
                        <li>IOT Services</li>
                        <li>Company Training & Certification</li>
                    </ul>
                    <h4>
                        Contact us <Link to="/connect" className="link-v"> here </Link>for consultancy services and more solutions.
                    </h4>
                </div>
                <div className="innoright col-md-6" data-aos="fade-left">
                    <img src="images/inno.png" alt=""/>
                </div>
            </div>
        </>
        
    )
}

export default Innovate

import React from 'react' 
const Footer = () => {
    
    return (
        <div className="footer-section">
                <div className="row footb">
                     <img src={process.env.PUBLIC_URL + "/images/Just_logo.png"} width="80" height="80" style={{marginLeft:"auto", marginRight:"auto", marginTop:"5vh"}}/>
                        <div className="col-sm-8 col-md-4">
                            <ul className="social">
                            <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-4 copyright">
                            <p style={{color:"#0a7d7d"}}>COPYRIGHT <i className="fa fa-copyright" aria-hidden="true"></i> 2020 by AVENEUR SOLUTIONS.</p>
                        </div>
               </div>
        </div>
    )
}

export default Footer

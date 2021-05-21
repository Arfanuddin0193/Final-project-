import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navwidth">
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/connect"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Connect
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar-logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/Just_logo.png"}
                  alt="ok"
                />
              </Link>
            </li>

            <li className="nav-item" style={{ color: "#6c757d" }}>
              {"{"}
              <Link to="/design" className="nav-link" onClick={closeMobileMenu}>
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/develop"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Develop
              </Link>
            </li>
            <li className="nav-item" style={{ color: "#6c757d" }}>
              <Link
                to="/innovate"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Innovate
              </Link>
              {"}"}
            </li>
          </ul>
        </nav>
        <div className="navservice">
          <p>SERVICES WE PROVIDE</p>
        </div>
        </div>
    </>
  );
}

export default Navbar;

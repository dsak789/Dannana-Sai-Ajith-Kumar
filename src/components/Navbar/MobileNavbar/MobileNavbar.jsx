import React from 'react'
import './MobileNavbar.css'
const MobileNavbar = ({isOpen, toggleMenu}) => {

    return (
      <>
        <div
          className={`mobile-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="mobile-menu-container">
            <img className="logo" src="/assets/AJJU.jpg" alt="DSAK-Logo" />
            <ul>
              <li>
                <a href="/#" className="menu-item">
                  Home
                </a>
              </li>
              <li>
                <a href={"/#skills" || "/skills"} className="menu-item">
                  Skills
                </a>
              </li>
              <li>
                <a href={"/#experience" || "/experience"} className="menu-item">
                  Work Experience
                </a>
              </li>
              <li>
                <a href={"/#projects" || "/projects"} className="menu-item">
                  Projects
                </a>
              </li>
              <li>
                <a href={"/#contact" || "/projects"} className="menu-item">
                  Contatct Me
                </a>
              </li>

              <button
                className="contact-btn"
                onClick={() => {
                  window.location.href = "mailto:dsak.official@gmail.com";
                }}
              >
                Hire Me
              </button>
            </ul>
          </div>
        </div>
      </>
    );
}

export default MobileNavbar
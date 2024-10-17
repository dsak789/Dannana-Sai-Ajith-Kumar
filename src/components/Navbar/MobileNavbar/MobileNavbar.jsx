import React from 'react'
import './MobileNavbar.css'
const MobileNavbar = ({isOpen, toggleMenu}) => {

    return (
    <>
    <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
    >
        <div className='mobile-menu-container'>
        <img 
            className="logo" 
            src='./assets/AJJU.jpg'
            alt="DSAK-Logo"
            />
        <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item'>Contatct Me</a>
                </li>
                
                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me 
                </button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNavbar
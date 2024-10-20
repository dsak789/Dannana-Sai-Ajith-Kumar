import { useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <a href="/">
            <img className="logo" src={"/DSAKlogo.png"} alt="DSAK-Logo" />
          </a>

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

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

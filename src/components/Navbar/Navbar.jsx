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
          <img className="logo" src="./assets/AJJU.jpg" alt="DSAK-Logo" />

          <ul>
            <li>
              <a href="/" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contatct Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
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

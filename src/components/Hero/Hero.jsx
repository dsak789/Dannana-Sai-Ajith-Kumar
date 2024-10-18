import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Hey, I'm Dannana Sai Ajith Kumar</h2>

        <Typed
          className="typed-roles"
          strings={["IT Graduate","Web Developer", "Passionate Coder", "Freelancer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

        <p>
          Transforming Ideas into Seamless and Visually Stunning Web Solutions
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn hero-contact-btn">
            Contact
          </a>
          <a href="/resume.pdf" className="btn resume-btn" download>
            Resume
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/dsak789"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/saiajithkumardannana"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/s.a.i_a.j.i.t.h_k.u.m.a.r_7_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://twitter.com/dsak_789/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/React-icon.svg.png" alt="React" />
          </div>
          <img src="./assets/SBProfile.jpg" alt="DSAK" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html5.png" alt="HTML5" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css3.png" alt="CSS3" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/javascript.png" alt="JavaScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

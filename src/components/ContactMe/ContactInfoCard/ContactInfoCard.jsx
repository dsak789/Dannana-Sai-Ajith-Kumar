import React from "react";
import "./ContactInfoCard.css";
const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <a href={link} target="_blank" rel="noreferrer" className="anchor">
        <div className="icon">
          <img src={iconUrl} alt="" />
        </div>
      </a>
      <a href={link} target="_blank" rel="noreferrer"className="anchor">
        <p>{text}</p>
      </a>
    </div>
  );
};

export default ContactInfoCard;

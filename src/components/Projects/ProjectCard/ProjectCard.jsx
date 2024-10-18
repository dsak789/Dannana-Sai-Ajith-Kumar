import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`projects-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="project-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default ProjectCard;

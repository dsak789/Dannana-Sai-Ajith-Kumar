import React from "react";
import "./ProjectInfo.css";
import { FaGithub } from "react-icons/fa"; // For GitHub icon

const ProjectInfo = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            className="project-thumbnail"
            src={project.images[0]} 
            alt={project.images[0]}
          />
          <div className="project-content">
            <h6>{project.title}</h6>
            <p className="project-description">{project.description}</p>
            <a href={`/projects/${index}`} className="view-more">
              {/* View More */}
            </a>

            <div className="project-links">
              {project.livelink ? (
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  Live Demo
                </a>
              ) : (
                <p className="disabled-link">Live link not available</p>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub /> GitHub
                </a>
              ) : (
                <p className="disabled-link">Project is private</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;

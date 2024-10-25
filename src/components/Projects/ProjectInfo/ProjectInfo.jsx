import React from "react";
import "./ProjectInfo.css";
import { FaGithub } from "react-icons/fa"; 

const ProjectInfo = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img
            className="project-thumbnail"
            src={project.images[0]} 
            alt={project.title+' Thubmnail'}
          />
          <div className="project-content">
            <h6>{project.title}</h6>
            <p className="project-description">{project.description}</p>
            <a href={`/projects/${project.platform}/${project.title}`} className="view-more">
              Know More
            </a>

            <div className="project-links">
              {project.livelink ? (
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  {project.platform ==="Android"?<>Download APK</>  : <>Live Link</>}
                </a>
              ) : (
                project.platform ==="Android"?<p className="disabled-link">Live Apk Link Not Available</p>:
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

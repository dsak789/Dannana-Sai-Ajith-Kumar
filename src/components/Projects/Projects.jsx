import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Platforms } from "../../utils/data";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
const Projects = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(Platforms[0]);
  const handleSelectedPlatform = (data) => {
    setSelectedPlatform(data);
  };

  return (
    <section className="projects-container" id="projects">
      <h5>Projects</h5>
      <div className="projects-content">
        <div className="projects">
          {Platforms.map((platform) => (
            <ProjectCard
              key={platform.title}
              iconUrl={platform.icon}
              title={platform.title}
              isActive={selectedPlatform.title === platform.title}
              onClick={() => handleSelectedPlatform(platform)}
            />
          ))}
        </div>
        <div className="projects-info">
          <ProjectInfo projects={selectedPlatform.Projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

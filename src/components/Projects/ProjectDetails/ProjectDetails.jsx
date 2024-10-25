import React from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { Projects } from "../../../utils/data";
import "./ProjectDetails.css";

const ProjectDetail = () => {
  const { platform, projectId } = useParams();
  // const project = Projects[platform][projectId];
  // console.log(projectId)
  const project = Projects[platform].find((project) => project.title === projectId);
  
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="project-detail-wrapper">
      <div className="project-detail-content">
        <h2 className="project-detail-title">{project.title}</h2>
        <p className="project-detail-description">{project.description}</p>

        {project["tools&technologies"] && (
          <div className="project-tools">
            <h4 className="project-tools-heading">Tools & Technologies:</h4>
            <ul className="project-tools-list">
              {project["tools&technologies"].map((tool, index) => (
                <li key={index} className="project-tool">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              GitHub Repo
            </a>
          ) : (
            <p className="project-private-info">
              Project is private or confidential
            </p>
          )}

          {project.livelink ? (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              Live Demo
            </a>
          ) : (
            <p className="project-private-info">Live link not available</p>
          )}
        </div>

        <div className="project-image-slider">
          <Slider {...sliderSettings}>
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="project-image-slide">
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

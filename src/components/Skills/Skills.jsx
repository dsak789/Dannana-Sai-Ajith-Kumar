import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "../Skills/SkillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container" id="skills">
      <h5>Technical Proficeincy</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.title}
              iconUrl={skill.icon}
              title={skill.title}
              isActive={selectedSkill.title === skill.title}
              onClick={() => handleSelectedSkill(skill)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

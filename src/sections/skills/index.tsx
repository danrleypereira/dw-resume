import React, { useState, useMemo } from "react";
import { hardSkills, softSkills, Skill } from "./skillsData";

import "./index.css";

const HexagonCell = React.memo(({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const opacity = useMemo(() => 0.2 + (skill.level / 5) * 0.8, [skill.level]);

  return (
    <div
      className="hexagon-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hexagon" style={{ opacity }}>
        <div className="hexagon-content">
          {skill.name}
          {isHovered && (
            <div className="skill-tooltip">Level: {skill.level}/5</div>
          )}
        </div>
      </div>
    </div>
  );
});

// SkillSection component
interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
  <div className="skill-section">
    <h2 className="section-title">{title}</h2>
    <div className="hexagon-grid">
      {skills.map((skill, index) => (
        <HexagonCell key={index} skill={skill} />
      ))}
    </div>
  </div>
);

// Main SkillsetContainer component
const SkillsetContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minLevel, setMinLevel] = useState(0);

  const filteredTechnicalSkills = useMemo(
    () =>
      hardSkills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          skill.level >= minLevel
      ),
    [searchTerm, minLevel]
  );

  const filteredSoftSkills = useMemo(
    () =>
      softSkills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          skill.level >= minLevel
      ),
    [searchTerm, minLevel]
  );

  return (
    <div className="skillset-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <input
          type="range"
          min="0"
          max="5"
          value={minLevel}
          onChange={(e) => setMinLevel(parseInt(e.target.value))}
          className="level-filter"
        />
        <span>Min Level: {minLevel}</span>
      </div>

      <SkillSection title="Technical Skills" skills={filteredTechnicalSkills} />
      <SkillSection title="Soft Skills" skills={filteredSoftSkills} />
    </div>
  );
};

export default function SkillsDisplay() {
  return (
    <>
      <SkillsetContainer />
    </>
  );
}

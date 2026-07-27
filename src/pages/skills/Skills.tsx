import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { hardSkills, softSkills, Skill } from "data/skillsData";

import "../page.css";
import "./skills.css";

const HexagonCell = React.memo(
  ({ skill, levelLabel }: { skill: Skill; levelLabel: string }) => {
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
              <div className="skill-tooltip">
                {levelLabel}: {skill.level}/5
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const SkillSection: React.FC<{
  title: string;
  skills: Skill[];
  levelLabel: string;
}> = ({ title, skills, levelLabel }) => (
  <div className="skill-section">
    <h2 className="section-title">{title}</h2>
    <div className="hexagon-grid">
      {skills.map((skill, index) => (
        <HexagonCell key={index} skill={skill} levelLabel={levelLabel} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [minLevel, setMinLevel] = useState(0);

  const filteredTechnical = useMemo(
    () =>
      hardSkills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          s.level >= minLevel
      ),
    [searchTerm, minLevel]
  );

  const filteredSoft = useMemo(
    () =>
      softSkills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          s.level >= minLevel
      ),
    [searchTerm, minLevel]
  );

  return (
    <div className="page">
      <h1 className="page-title">{t("skills.title")}</h1>
      <hr className="page-rule" />

      <div className="controls">
        <input
          type="text"
          placeholder={t("skills.search")}
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
        <span>
          {t("skills.minLevel")}: {minLevel}
        </span>
      </div>

      <SkillSection
        title={t("skills.technical")}
        skills={filteredTechnical}
        levelLabel={t("skills.level")}
      />
      <SkillSection
        title={t("skills.soft")}
        skills={filteredSoft}
        levelLabel={t("skills.level")}
      />
    </div>
  );
}

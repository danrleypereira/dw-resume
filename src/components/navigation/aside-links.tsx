import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import perfil from "assets/perfil1-nav.jpeg";
import telephone from "assets/navigation/telephone.png";
import glasses from "assets/navigation/glasses.png";
import briefcase from "assets/navigation/briefcase.svg";
import resume from "assets/navigation/resume-80.png";

import "./navigation.css";
import { socialMidias } from "components/social-midia-aside/aside-social-midia";

type NavItem = { to: string; labelKey: string; icon: string };

const navItems: NavItem[] = [
  { to: "/habilidades", labelKey: "nav.skills", icon: glasses },
  { to: "/projetos", labelKey: "nav.projects", icon: briefcase },
  { to: "/curriculo", labelKey: "nav.cv", icon: resume },
  { to: "/contato", labelKey: "nav.contact", icon: telephone },
];

function AsideLinks() {
  const { t } = useTranslation();

  return (
    <div className="links-navigation">
      {/* Profile -> Home */}
      <Link to="/" title={t("nav.home")} className="nav-profile">
        <div>
          <img src={perfil} alt={t("nav.profile")} />
          <h3>{t("nav.profile")}</h3>
        </div>
      </Link>

      {navItems.map((item, index) => (
        <Link key={index} to={item.to} title={t(item.labelKey)}>
          <div className="nav-link">
            <img src={item.icon} alt={t(item.labelKey)} />
            <h3>{t(item.labelKey)}</h3>
          </div>
        </Link>
      ))}

      <div>
        {socialMidias.map((midia, index) => (
          <a
            className="block-a"
            key={index}
            href={midia.link}
            target="_blank"
            rel="noopener noreferrer"
            title={midia.name}
          >
            <img
              src={midia.icon}
              className={`social-midia-icon ${midia.spin ? "spin" : ""}`}
              alt={midia.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default AsideLinks;

import React from "react";
import { Link } from "react-router-dom";

import perfil from "assets/perfil1-nav.jpeg";
import telephone from "assets/navigation/telephone.png";
import glasses from "assets/navigation/glasses.png";
import account from "assets/navigation/account-50.png";
import briefcase from "assets/navigation/briefcase.svg";
import resume from "assets/navigation/resume-80.png";

import "./navigation.css";
import { socialMidias } from "components/social-midia-aside/aside-social-midia";

const items = [
  // External Links (start with http)
  {
    href: "https://www.instagram.com/danrleypereira/",
    title: "instagram",
    icon: perfil,
    text: "Danrley Pereira",
  },
  {
    href: "/",
    title: "meu outro site",
    icon: account,
    text: "Euzinho",
  },
  // Example of internal link (not starting with http)
  {
    href: "/skills",
    title: "Habilidades",
    icon: glasses,
    text: "Habilidades",
  },
  {
    href: "https://github.com/danrleypereira",
    title: "github",
    icon: briefcase,
    text: "Projetos",
  },
  {
    href: "https://api.whatsapp.com/send?phone=5561994234712&text=Hey%2C%20I%20just%20found%20you%20on%20danrleypereira.com",
    title: "whatsapp",
    icon: telephone,
    text: "Contato",
  },
  {
    href: "https://drive.google.com/file/d/1ttJdxKq7AHNH7vfELLP7LU1qy5fabv3C/view?usp=sharing",
    title: "Curriculum",
    icon: resume,
    text: "Curriculum",
  },
];

function AsideLinks() {
  return (
    <div className="links-navigation">
      {items.map((item, index) => {
        const isExternal = item.href.startsWith("http");

        return isExternal ? (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            className={index === 0 ? "nav-profile" : ""}
          >
            <div className={index === 0 ? "" : "nav-link"}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.text}</h3>
            </div>
          </a>
        ) : (
          <Link
            key={index}
            to={item.href}
            title={item.title}
            className={index === 0 ? "nav-profile" : ""}
          >
            <div className={index === 0 ? "" : "nav-link"}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.text}</h3>
            </div>
          </Link>
        );
      })}
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

import React from 'react';
// import facebook from 'assets/social-midias/facebook-48.svg';
// import linkedin from 'assets/social-midias/linkedin-48.svg';
// import github from 'assets/social-midias/github-48.svg';
// import instagram from 'assets/social-midias/instagram-48.svg';
import facebook from 'assets/social-midias/facebook.svg';
import linkedin from 'assets/social-midias/linkedin.svg';
import github from 'assets/social-midias/github.svg';
import instagram from 'assets/social-midias/instagram.svg';
import './aside-social-midia.css';

const socialMidias = [
  {
    link: "https://github.com/danrleywillyan",
    name: "github icon/link",
    icon: github,
    spin: true
  },
  {
    link: "https://www.linkedin.com/in/danrleypereira/",
    name: "linkedin icon/link",
    icon: linkedin,
    spin: false
  },
  {
    link: "https://www.instagram.com/danrleypereira",
    name: "instagram icon/link",
    icon: instagram,
    spin: false
  },
  {
    link: "https://www.facebook.com/danrleywillyan",
    name: "facebook icon/link",
    icon: facebook,
    spin: true
  }
]


function SocialMidiaAside() {
  return (
    <div className="social-midia-aside">
      {
        socialMidias.map((midia, index) => {
          return (
            <a
              key={index}
              href={midia.link}
              target="_blank"
              rel="noopener noreferrer"
              title={midia.name}
            >
              <img
                src={midia.icon}
                className={`social-midia-icon ${midia.spin && 'spin'}`}
                alt={midia.name}
              />
            </a>
          )
        })
      }
    </div>
  );
}

export {SocialMidiaAside, socialMidias};
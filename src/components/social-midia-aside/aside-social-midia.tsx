import React from 'react';
// import facebook from 'assets/social-midias/facebook-48.svg';
// import linkedin from 'assets/social-midias/linkedin-48.svg';
// import github from 'assets/social-midias/github-48.svg';
// import instagram from 'assets/social-midias/instagram-48.svg';
import facebook from 'assets/social-midias/facebook.svg';
import linkedin from 'assets/social-midias/linkedin.svg';
import github from 'assets/social-midias/github.svg';
import instagram from 'assets/social-midias/instagram.svg';
import { links } from 'data/links';
import './aside-social-midia.css';
import WhatsAppLink from './whatsapp-link';

const socialMidias = [
  {
    link: links.github,
    name: "github icon/link",
    icon: github,
    spin: true
  },
  {
    link: links.linkedin,
    name: "linkedin icon/link",
    icon: linkedin,
    spin: false
  },
  {
    link: links.instagram,
    name: "instagram icon/link",
    icon: instagram,
    spin: false
  },
  {
    link: links.facebook,
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
            <React.Fragment key={midia.link}>
              {index === 2 && <WhatsAppLink />}
              <a
                href={midia.link}
                target="_blank"
                rel="noopener noreferrer"
                title={midia.name}
              >
                <img
                  src={midia.icon}
                  width="48"
                  height="48"
                  className={`social-midia-icon${midia.spin ? ' spin' : ''}`}
                  alt={midia.name}
                />
              </a>
            </React.Fragment>
          )
        })
      }
    </div>
  );
}

export {SocialMidiaAside, socialMidias};

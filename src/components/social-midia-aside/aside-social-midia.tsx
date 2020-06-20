import React from 'react';
import facebook from '../../assets/social-midias/facebook-48.svg';
import linkedin from '../../assets/social-midias/linkedin-48.svg';
import github from '../../assets/social-midias/github-48.svg';
import instagram from '../../assets/social-midias/instagram-48.svg';
import './aside-social-midia.css';

function SocialMidiaAside() {
  return (
    <div className="social-midia-aside">
        <a
          href="https://github.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="github icon/link"
        >
          <img src={github} className="social-midia-icon spin" alt="github icon/link" />
        </a>
        <a
          href="https://www.linkedin.com/in/danrley-willyan/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin icon/link"
        >
            <img src={linkedin} className="social-midia-icon" alt="linkedin icon/link" />
        </a>
        <a
          href="https://www.instagram.com/danrleypereira/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram icon/link"
        >
            <img src={instagram} className="social-midia-icon" alt="instagram icon/link" />
        </a>
        <a
          href="https://www.facebook.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook icon/link"
        >
            <img src={facebook} className="social-midia-icon spin" alt="facebook icon/link" />
        </a>
    </div>
  );
}

export default SocialMidiaAside;
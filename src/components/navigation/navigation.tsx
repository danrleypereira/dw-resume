import React from 'react';
import menuIconMobile from '../../assets/navigation/three-dots.svg';
import menuIcon from '../../assets/navigation/three-parallel-lines.svg';
import './navigation.css';

function Navigation() {
  let showOnHoverEvent = function() {
    let openedMenu = document.getElementsByClassName("opened");
    let closedMenu = document.getElementsByClassName("closed");
    openedMenu[0].className = "show opened";
    closedMenu[0].className = "hide closed";
  };
  let hideOnLeaveEvent = function() {
    let openedMenu = document.getElementsByClassName("opened");
    let closedMenu = document.getElementsByClassName("closed");
    openedMenu[0].className = "hide opened";
    closedMenu[0].className = "show closed";
  };

  return (
    <div className="navigation" onMouseOver={showOnHoverEvent} onMouseLeave={hideOnLeaveEvent}>
      <div className="show closed">
        <img src={menuIcon} className="social-midia-icon" alt="github icon/link" />
      </div>
      <div className="hide opened">
        <a
          href="https://github.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="github icon/link"
        >
          <img src={menuIconMobile} className="" alt="github icon/link" />
        </a>
        <a
          href="https://www.linkedin.com/in/danrley-willyan/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin icon/link"
        >
            <img src={menuIconMobile} className="" alt="linkedin icon/link" />
        </a>
        <a
          href="https://www.instagram.com/danrleypereira/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram icon/link"
        >
            <img src={menuIconMobile} className="" alt="instagram icon/link" />
        </a>
        <a
          href="https://www.facebook.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook icon/link"
        >
            <img src={menuIconMobile} className="" alt="facebook icon/link" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
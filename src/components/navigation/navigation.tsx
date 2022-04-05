import React from 'react';
import menuIcon from 'assets/navigation/three-parallel-lines.svg';

import './navigation.css';

import AsideLinks from './aside-links';


function Navigation() {
  let showOnHoverEvent = function() {
    let openedMenu = document.getElementById("opened");
    let closedMenu = document.getElementById("closed");
    //question mark make sure that is not undefined or null
    // console.log(closedMenu?.className);
    //exclamation mark says that I am sure that isn't null
    openedMenu!.className = "show";
    closedMenu!.className = "hide";    
  };
  let hideOnLeaveEvent = function() {
    let openedMenu = document.getElementById("opened");
    let closedMenu = document.getElementById("closed");
    openedMenu!.className = "hide";
    closedMenu!.className = "show";
  };

  return (
    <div className="navigation" onMouseOver={showOnHoverEvent} onMouseLeave={hideOnLeaveEvent}>
      <div id="closed" className="show">
        <img src={menuIcon} className="social-midia-icon" alt="github icon/link" />
      </div>
      <div id="opened" className="hide">
        <AsideLinks />
      </div>
    </div>
  );
}

export default Navigation;
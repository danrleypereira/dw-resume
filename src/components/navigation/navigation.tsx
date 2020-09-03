import React from 'react';
import menuIcon from '../../assets/navigation/three-parallel-lines.svg';
import perfil from '../../assets/perfil1-nav.png';

import telephone from '../../assets/navigation/telephone.png';
import glasses from '../../assets/navigation/glasses.png';
import account from '../../assets/navigation/account-50.png';
import briefcase from '../../assets/navigation/briefcase.svg';

import './navigation.css';

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
      <a
          href="https://github.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="home link"
          className="nav-profile"
        >
          <div>
            <img src={perfil} className="" alt="github icon/link" />
            <h3>Danrley Pereira</h3>
          </div>
        </a>
        <a
          href="https://danrleywillyan-blog.firebaseapp.com"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin icon/link"
        >
          <div className="nav-link">
            <img src={account} className="" alt="github icon/link" />
            <h3>Euzinho</h3>
          </div>
        </a>
        <a
          href="https://www.instagram.com/danrleypereira/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram icon/link"
        >
          <div className="nav-link">
            <img src={glasses} className="" alt="github icon/link" />
            <h3>Habilidades</h3>
          </div>        </a>
        <a
          href="https://www.facebook.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook icon/link"
        >
          <div className="nav-link">
            <img src={briefcase} className="" alt="github icon/link" />
            <h3>Projetos</h3>
          </div>
        </a>
        <a
          href="https://www.facebook.com/danrleywillyan"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook icon/link"
        >
          <div className="nav-link">
            <img src={telephone} className="" alt="github icon/link" />
            <h3>Contato</h3>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
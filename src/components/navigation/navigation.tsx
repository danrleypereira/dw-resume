import React, { useState } from 'react';
import menuIcon from 'assets/navigation/three-parallel-lines.svg';

import './navigation.css';

import AsideLinks from './aside-links';

function Navigation() {
  const [opened, setOpened] = useState(false)
  //maybe a context?
  const [isMobile] = useState<boolean>(window.innerWidth <= 991.98);

  let showOnHoverEvent = function (e: React.MouseEvent<HTMLElement>) {
    setOpened(true)
    e.preventDefault()
    //question mark make sure that is not undefined or null
    // console.log(closedMenu?.className);
    //exclamation mark says that I am sure that isn't null
    // openedMenu!.className = "show";
    // closedMenu!.className = "hide";
  };
  let hideOnLeaveEvent = function (e: React.MouseEvent<HTMLElement>) {
    setOpened(false)
    e.preventDefault()
  };
  let onClick = function (e: React.MouseEvent<HTMLElement>) {
    if(!opened) e.preventDefault()
    setOpened(!opened)
  }

  return (
    <div className="navigation"
      onMouseEnter={isMobile ? () => {return false} : (e) => showOnHoverEvent(e)}
      onMouseLeave={(e) => hideOnLeaveEvent(e)}
      onClick={(e) => onClick(e)}
    >
      {opened ?
        (
          <div id="opened">
            <AsideLinks />
          </div>
        )
        :
        (
          <div id="closed">
            <img src={menuIcon} className="social-midia-icon" alt="github icon/link" />
          </div>
        )
      }
    </div>
  );
}

//if need to change windows size
// function handleWindowSizeChange() {
//   setWidth(window.innerWidth);
// }
// useEffect(() => {
//   window.addEventListener('resize', handleWindowSizeChange);
//   return () => {
//       window.removeEventListener('resize', handleWindowSizeChange);
//   }
// }, []);

export default Navigation;
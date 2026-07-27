import React, { useEffect, useRef, useState } from "react";
import menuIcon from "assets/navigation/three-parallel-lines.svg";

import "./navigation.css";

import AsideLinks from "./aside-links";

function Navigation() {
  const [opened, setOpened] = useState(false);
  const [isMobile] = useState<boolean>(window.innerWidth <= 991.98);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking/tapping anywhere outside the open menu.
  useEffect(() => {
    if (!opened) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpened(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [opened]);

  return (
    <>
      {opened && isMobile && (
        <div className="nav-backdrop" onClick={() => setOpened(false)} />
      )}
      <div
        className="navigation"
        ref={menuRef}
        onMouseEnter={isMobile ? undefined : () => setOpened(true)}
        onMouseLeave={isMobile ? undefined : () => setOpened(false)}
      >
        {opened ? (
          // Clicking a link (or anywhere in the panel) also closes the menu.
          <div id="opened" onClick={() => setOpened(false)}>
            <AsideLinks />
          </div>
        ) : (
          <div
            id="closed"
            role="button"
            tabIndex={0}
            aria-label="menu"
            onClick={() => setOpened(true)}
          >
            <img src={menuIcon} className="menu-icon" alt="menu" />
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;

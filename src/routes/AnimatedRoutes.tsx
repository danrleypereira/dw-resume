import React, { Suspense, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Home from "pages/home/Home";
import Projects from "pages/projects/Projects";
import Cv from "pages/cv/Cv";
import Contact from "pages/contact/Contact";

import "./routes.css";

// Heavy (React Flow) — load only when visiting /habilidades.
const Skills = React.lazy(() => import("pages/skills/Skills"));

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={250}
        classNames="route-fade"
        unmountOnExit
      >
        <div ref={nodeRef} className="route-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route
              path="/habilidades"
              element={
                <Suspense fallback={<div className="page" />}>
                  <Skills />
                </Suspense>
              }
            />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/curriculo" element={<Cv />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default AnimatedRoutes;

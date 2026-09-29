import React, { lazy, Suspense, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Home from "pages/home/Home";
import "./routes.css";

const Skills = lazy(() => import("pages/skills/Skills"));
const Projects = lazy(() => import("pages/projects/Projects"));
const Cv = lazy(() => import("pages/cv/Cv"));
const Contact = lazy(() => import("pages/contact/Contact"));

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
          <Suspense fallback={<div role="progressbar" aria-label="Loading" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/habilidades" element={<Skills />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/curriculo" element={<Cv />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          </Suspense>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default AnimatedRoutes;

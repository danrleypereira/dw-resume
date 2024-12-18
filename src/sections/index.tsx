import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PersonasSlider from "components/persona-slider/persona-slider";
import SkillsDisplay from "./skills";

import "./index.css";

// Separate component to handle animated routes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup className="">
      <CSSTransition
        key={location.key}
        classNames="routeTransition"
        timeout={300}
      >
        <Routes location={location}>
          <Route path="/" element={<PersonasSlider />} />
          <Route path="/skills" element={<SkillsDisplay />} />
          {/* Add more routes as needed */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function Home() {
  return (
    <div className="content-container">
      <AnimatedRoutes />
    </div>
  );
}

export default Home;

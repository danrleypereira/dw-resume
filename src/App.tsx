import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navigation from "components/navigation/navigation";
import { SocialMidiaAside } from "components/social-midia-aside/aside-social-midia";
import LanguageSwitcher from "components/language-switcher/LanguageSwitcher";
import AnimatedRoutes from "routes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <SocialMidiaAside />
        <LanguageSwitcher />
        <main className="content-container">
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

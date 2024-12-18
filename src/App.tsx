import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from 'sections';
import {SocialMidiaAside} from 'components/social-midia-aside/aside-social-midia';
import Navigation from 'components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <SocialMidiaAside />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;

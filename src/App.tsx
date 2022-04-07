import React from 'react';
import './App.css';
import Home from 'sections/home/Home';
import {SocialMidiaAside} from 'components/social-midia-aside/aside-social-midia';
import Navigation from 'components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <SocialMidiaAside />
      <Home />
    </div>
  );
}

export default App;

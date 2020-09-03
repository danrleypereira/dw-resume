import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

import Navigation from './components/navigation/navigation';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;

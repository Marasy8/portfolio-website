import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import { Home, About, Projects, Contact, GitHub } from './components';

const App = () => {
  return (
    <Router>
      <div className = "container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/github" element={<GitHub />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
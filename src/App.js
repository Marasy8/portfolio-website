import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <section id="home" className="section">
          <h2>
            Hey, I'm Charles!
          </h2>
          <p>
            Welcome to my personal abode.
          </p>
          <p>
            I'm a software developer with a passion for learning and design. I like playing piano, good stories, and competing in Smash Ultimate.
          </p>
        </section>
        <section id="about" className="section">
          <h2>About me</h2>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
        </section>
      </div>
    </Router>
  );
};


export default App;
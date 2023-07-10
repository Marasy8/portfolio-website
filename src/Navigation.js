import React from 'react';
import { Link, } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
      <nav className="navigation">
        <div className="left-links">
          <Link to="/">Home</Link>
        </div>
        <div className="right-links">
          <a href ="#about">About</a>
          <a href ="#education">Education</a>
          <a href ="#experience">Experience</a>
          <a href ="#projects">Projects</a>
          <a href ="https://github.com/marasy8" target="_blank" rel = "noopener noreferrer">GitHub</a>
        </div>
      </nav>
    );
  };

export default Navigation;

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
          <a href ="#projects">Projects</a>
          <a href ="#contact">Contact</a>
          <a href ="#github">GitHub</a>
        </div>
      </nav>
    );
  };

export default Navigation;

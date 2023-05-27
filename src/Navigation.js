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
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/github">GitHub</Link>
        </div>
      </nav>
    );
  };

export default Navigation;

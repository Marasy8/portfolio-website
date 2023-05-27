import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GitHub from './components/GitHub';

function App() {
  return (
    <Router>
    <div>
      <Navigation />
      <Routes>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/projects" component = {Projects}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/github" component = {GitHub}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
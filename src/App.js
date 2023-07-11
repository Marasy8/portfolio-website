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
            Welcome to my personal abode. (Work in Progress)
          </p>
          <p>
            I'm a software developer with a passion for learning and design. I like playing piano, good stories, and competing in Smash Ultimate.
          </p>
          {/* change below into icons later */}
          <p>
            <a href = "https://linkedin.com/in/charlesaizm" target="_blank" rel = "noopener noreferrer">LinkedIn</a>
          </p>
          <p>
            <a href = "https://github.com/marasy8" target="_blank" rel = "noopener noreferrer">GitHub</a>
          </p>
        </section>
        
        <section id="about" className="section">
          <h2>About me</h2>
          <p>
            Hi, I'm Charles! I recently graduated from the University of Alberta in June 2023, where I majored in Computing Science and minored in Philosophy.

          </p>
          <p>
            I love playing the piano, with <a href = "https://www.youtube.com/@marasy8" target="_blank" rel = "noopener noreferrer">marasy8</a> being my personal inspiration. Some other interests I have include playing badminton, competing in Super Smash Bros. Ultimate, reading manga, and fanboying over Xenoblade Chronicles (you should play it).

          </p>
          <p>
            Improvement is something that I always love and strive for. Whether it's reviewing gameplay footage in Smash, or trying to learn a new skill like drawing, I'm always eager to learn.
            I have received an immense amount of advice from my peers as well as experts who I reach out to in all areas of my life. 
          </p>
          <p>
            The coolest thing to me about software development is the power of the individual to push boundaries. This website will be something to represent things I work on in the past, present and <a href = "https://www.youtube.com/watch?v=6AFrKrwfdr8" target="_blank" rel = "noopener noreferrer">future</a>.
          </p>
          <p>
            Feel free to browse and learn more about my work. Looking forward to connecting!
          </p>
        </section>

        <section id="experience" className="section">
          <h2>Professional Experience</h2>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <p>
            <h3>Bachelor of Science in Computing Science</h3>
            <h4>University of Alberta</h4>
            <h5>Edmonton, Alberta, Canada</h5>
          </p>
          <p>
            Sept. 2018 - June 2023
          </p>
          <p>
            Science Internship Program with Philosophy Minor
          </p>
          <p>
            Description placeholder
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
        </section>
      </div>
    </Router>
  );
};


export default App;
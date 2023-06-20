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
        </section>
        <section id="about" className="section">
          <h2>About me</h2>
          <p>
            Hi, I'm Charles! I recently graduated from the University of Alberta in June 2023, where I majored in Computing Science and minored in Philosophy.

          </p>
          <p>
            I love playing the piano, with marasy8 being my personal inspiration. Some other interests I have include playing badminton, competing in Super Smash Bros. Ultimate, reading manga, and fanboying over Xenoblade Chronicles (you should play it).

          </p>
          <p>
            Improvement is something that I always love and strive for. Whether it's reviewing gameplay footage in Smash, or trying to learn a new skill like drawing, I'm always eager to learn.
            I have received an immense amount of advice from my peers as well as experts who I reach out to in all areas of my life. 
          </p>
          <p>
            The coolest thing to me about software development is the power of the individual to push boundaries. This website will be something to represent things I work on in the past, present and <a href = "https://www.youtube.com/watch?v=6AFrKrwfdr8">future</a>.
          </p>
          <p>
            Feel free to browse and learn more about my work. Looking forward to connecting!
          </p>
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
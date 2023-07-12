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
            I love playing the piano, with <a href = "https://www.youtube.com/@marasy8" target="_blank" rel = "noopener noreferrer">marasy8</a> being my personal inspiration. Some other interests I have include playing badminton, competing in Super Smash Bros. Ultimate, reading manga, and enjoying the series Xenoblade Chronicles.

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
          <p>To be refined</p>

          <h3>Software Development Intern</h3>
          <p>Employment and Social Development Canada</p>
          <p>May 2022 - Aug. 2022 | Remote</p>
          <p>
            Deployed enterprise software applications using Spring Boot and Camel to production via Jenkins. Worked on schemva validation which checked for errors in XML message consumption from queues using SoapUI. Integrated new properties into the stack architecture and implemented logging features for consistency and debugging. Utilized ElasticSearch for debugging.
          </p>
          
          <h3>Software Development Intern</h3>
          <p>Employment and Social Development Canada</p>
          <p>Sept. 2021 - Dec. 2021 | Remote</p>
          <p>
            Developed features for replacement products using Spring Boot and Camel. Utilized SourceTree and Bitbucket to manage code changes and version control.
          </p>

          <h3>Engineering Intern</h3>
          <p>TC Energy</p>
          <p>May 2018 - Aug. 2018 | Edmonton, Alberta</p>
          <p>
            Designed and produced daily Wildfire hotspot reports by combining information from GeoFind, Alberta Wildfire Status, GIS, and more. Worked on over 30,000 Meter Station data with Excel for large scale data reformatting for consistency. 
          </p>
          <h3>Engineering Intern</h3>
          <p>TC Energy</p>
          <p>May 2017 - Aug. 2017 | Calgary, Alberta</p>
          <p>
            Performed large scale data uploads of 10,000+ equipment to Maxi-Trak involving Tanks and Pressure Vessels. Worked with Ultrasonic Thickness tests for the estimation of pipe degradation rate. 
          </p>

          <h3>Engineering Intern</h3>
          <p>TC Energy</p>
          <p>May 2016 - Aug. 2016 | Calgary, Alberta</p>
          <p>
            Primarily worked with Maxi-Trak, an engineering assets database software. Utilized Excel formulas for large scale reformatting and uploading. Additionally worked with a Maxi-Trak VP to provide UI/UX suggestions as an experienced user.
          </p>
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
            Course Highlights: Full-Stack Web Development, Object-Oriented Programming, Data Structures and Algorithms
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <h3>Gyarados Bot</h3>
          <p>A Python reminder bot using API from discord.py and deployed on Heroku (inactive).</p>
          <p>The purpose of this bot was to announce regular messages for a discord server to aid as a reminder and also my first project.</p>
          <p><a href = "https://github.com/marasy8/Gyarados-Bot" target="_blank" rel = "noopener noreferrer">GitHub Link</a></p>

          
        </section>
      </div>
    </Router>
  );
};


export default App;
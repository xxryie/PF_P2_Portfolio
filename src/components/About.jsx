import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Critical Thinking', 'Giving Constructive Feedback', 'Collaboration', 'Empathy',
    'Node.js', 'Database Management', 'System Development', 'Adaptability'
  ];

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <h2>About XY</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Get to know me!</h3>
            <p>
              I’m an IT student who’s really into figuring out how systems and apps work behind the scenes.
              I got interested in tech because I was curious about how websites and programs are actually built
              and how they run in real life.
            </p>

            <p>
              I enjoy making systems that are simple, organized, and easy to use. I’ve worked on projects like
              a library borrowing record system and other school apps, where I focused on keeping the interface
              clear and the system smooth to use. I like paying attention to the little details that make things better.
            </p>

            <p>
              My goal is to keep learning and improving as a developer. I enjoy exploring new tech, solving tricky
              problems, and challenging myself with different projects. When I’m not coding, I like checking out
              new tools and experimenting with design ideas.
            </p>
          </div>

          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

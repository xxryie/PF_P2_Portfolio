import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Library Borrowing Records System',
      description: 'A comprehensive system tailored to manage library operations, including book inventory, borrowing requests, and member management. Designed to streamline administrative tasks for librarians.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: '#',
      demoLink: '#',
      placeholderColor: '#f8bbd0'
    },
    {
      id: 2,
      title: '4 Pics 1 Word Game System',
      description: 'An interactive puzzle game inspired by the popular mobile app. The system presents users with 4 images that share a common theme, challenging them to guess the hidden word.',
      techStack: ['JavaScript', 'React', 'CSS'],
      githubLink: '#',
      demoLink: '#',
      placeholderColor: '#e1bee7'
    },
    {
      id: 3,
      title: 'Student Registration Portal',
      description: 'A dedicated web portal for managing student enrollments, profiling, and course registration. Built with a focus on security and data integrity.',
      techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      githubLink: '#',
      demoLink: '#',
      placeholderColor: '#bbdefb'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>My Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="card project-card">
              <div 
                className="project-image" 
                style={{ backgroundColor: project.placeholderColor }}
              >
                <span>{project.title.substring(0, 1)}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubLink} className="btn-link">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demoLink} className="btn-link primary">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

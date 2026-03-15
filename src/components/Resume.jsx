import React from 'react';
import { Download, BookOpen, Layers, Award, Briefcase } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section section-alt resume-section">
      <div className="container">
        <h2>Resume</h2>

        <div className="resume-grid">
          {/* Education & Experience */}
          <div className="resume-column">
            <div className="resume-category">
              <div className="category-header">
                <BookOpen size={24} className="category-icon" />
                <h3>Education</h3>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2023 - Present</div>
                <h4 className="item-title">Bachelor of Science in Information Technology</h4>
                <div className="item-subtitle">Lyceum of Alabang</div>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2020 - 2022</div>
                <h4 className="item-title">Academic Strand - HUMSS </h4>
                <div className="item-subtitle">Informatics College Northgate</div>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2016 - 2020</div>
                <h4 className="item-title">Junior High School</h4>
                <div className="item-subtitle">Las Pinas National High School - Almanza</div>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2010 - 2016</div>
                <h4 className="item-title">Elementary</h4>
                <div className="item-subtitle">Pilar Village Elementary School</div>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2008 - 2010</div>
                <h4 className="item-title">Kindergarten</h4>
                <div className="item-subtitle">Seventh Day Adventist Learning for Children</div>
              </div>
            </div>

            <div className="resume-category">
              <div className="category-header">
                <Briefcase size={24} className="category-icon" />
                <h3>Experience & Projects</h3>
              </div>
              <div className="resume-item">
                <div className="item-timeline">2022 - 2023 (8 months)</div>
                <h4 className="item-title">Cashier / Front of House</h4>
                <div className="item-subtitle">Peri-Peri Southmall</div>
                <p className="item-desc">
                  Assisted customers with orders, handled transactions accurately, and maintained a clean and welcoming service area.
                  Gained valuable experience in customer service, teamwork, and time management.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills & Certs */}
          <div className="resume-column">
            <div className="resume-category">
              <div className="category-header">
                <Layers size={24} className="category-icon" />
                <h3>Technical Skills</h3>
              </div>
              <div className="skill-bars">
                <div className="skill-bar-container">
                  <div className="skill-info">
                    <span>Frontend (HTML, CSS)</span>
                    <span>30%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '30%' }}></div></div>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-info">
                    <span>Backend (PHP, Java, Python, VB .Net)</span>
                    <span>50%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-info">
                    <span>Database (MySQL)</span>
                    <span>80%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-info">
                    <span>UI/UX Design</span>
                    <span>50%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="resume-category">
              <div className="category-header">
                <Award size={24} className="category-icon" />
                <h3>Certifications</h3>
              </div>
              <div className="resume-item">
                <h4 className="item-title">IT Specialist Database</h4>
                <div className="item-subtitle">Online Certification - 2025</div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-download">
          <button className="btn btn-primary" onClick={() => alert('Resume PDF will be downloaded here!')}>
            Download Full Resume <Download size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;

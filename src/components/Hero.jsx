import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import './Hero.css';
import XyPhoto from "../assets/Xy.jpg";

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Xyrylle Claire Matiga</h1>
          <h3 className="tagline">IT Student</h3>
          <p className="description">
            Passionate about building user-friendly systems, crafting elegant code, and designing modern, accessible web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#resume" className="btn btn-outline">
              Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ border: 'none', color: 'var(--text-muted)' }}>
              Contact Me <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-backdrop"></div>
          <div className="hero-image">
            <img
              src={XyPhoto}
              alt="Profile Photo"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

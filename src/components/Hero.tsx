import React from 'react';
import './Hero.css';
import { RevealOnScroll } from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <RevealOnScroll>
            <h2 className="subtitle">Hello, I'm a Developer</h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <h1 className="title">
              Crafting <span className="text-gradient">Digital Excellence</span>
              <br /> for the Modern Web.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="description">
              I build accessible, pixel-perfect, and performant web experiences.
              Specializing in React, TypeScript, and modern digital solutions.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="cta-group">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            {/* Added Resume Download Button - Primary Location */}
            <div style={{ marginTop: '1.5rem' }}>
                <a href="/Rituraj.pdf" download="Rituraj.pdf" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Download Resume
                </a>
            </div>
          </RevealOnScroll>
        </div>

        <div className="hero-image-container">
          <RevealOnScroll>
            <div className="hero-image-wrapper">
              <img src="/image1.jpeg" alt="Developer Profile" className="hero-image" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;

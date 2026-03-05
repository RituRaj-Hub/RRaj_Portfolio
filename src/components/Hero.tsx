import React from 'react';
import './Hero.css';
import { RevealOnScroll } from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <RevealOnScroll width="100%">
            <h2 className="subtitle">Frontend Engineer • React</h2>
          </RevealOnScroll>

          <RevealOnScroll width="100%">
            <h1 className="title">
              Building <span className="text-gradient">Fast,
                Scalable Web</span>
              <br />
              Applications.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll width="100%">
            <p className="description">
              3+ years crafting responsive, high-performance React applications used in real-world projects.
            </p>
          </RevealOnScroll>

          <RevealOnScroll width="100%">
            <div className="cta-group">
              <a href="#projects" className="btn btn-secondary">View Work</a>
              <a
                href="/my_resume/RituRajj.pdf"
                download="RituRajj.pdf"
                className="btn btn-primary"
              >
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

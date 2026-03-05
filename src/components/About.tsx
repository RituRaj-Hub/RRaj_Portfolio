import React from 'react';
import './About.css';
import { RevealOnScroll } from './RevealOnScroll';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                        <p className="section-subtitle">Frontend engineering focused on performance and scalability                        </p>
                    </div>
                </RevealOnScroll>

                <div className="about-content">
                    <div className="about-text-column">
                        <RevealOnScroll>
                            <h3 className="about-heading">Designing & Engineering Modern Web Applications                            </h3>
                            <p className="about-text">
                                I’m a Frontend Engineer with 3+ years of experience building
                                responsive and high-performance web applications using React.
                                My work focuses on clean component architecture, performance
                                optimization, and creating smooth user experiences for real users.
                            </p>
                            <p className="about-text">
                                I enjoy solving real product challenges — improving load speed,
                                building scalable UI systems, and delivering interfaces that
                                remain reliable as applications grow.
                            </p>

                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                        </RevealOnScroll>
                    </div>

                    <div className="expectations-grid">
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">🚀</div>
                                <h4>Performance First</h4>
                                <p>Optimized rendering, faster load times, and efficient frontend performance.                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">📱</div>
                                <h4>Responsive Design</h4>
                                <p>Flawless experiences across all devices and screen sizes.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">🧩</div>
                                <h4>Scalable Architecture</h4>
                                <p>Reusable components and structured frontend systems built for long-term growth.                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">💡</div>
                                <h4>Modern Tech</h4>
                                <p>Building applications using React, Tailwind CSS, REST APIs, and modern frontend tooling.                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

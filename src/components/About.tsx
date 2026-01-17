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
                        <p className="section-subtitle">Bridging the gap between design and technology</p>
                    </div>
                </RevealOnScroll>

                <div className="about-content">
                    <div className="about-text-column">
                        <RevealOnScroll>
                            <h3 className="about-heading">Building Scalable Digital Solutions</h3>
                            <p className="about-text">
                                I am a results-driven Frontend Developer & Digital Solutions Expert with over 3 years of experience.
                                My passion lies in crafting efficient, scalable, and user-friendly web applications that solve real-world problems.
                            </p>
                            <p className="about-text">
                                Beyond code, I specialize in SEO optimization and digital growth strategies, ensuring that every
                                project I deliver not only looks great but performs exceptionally well in search rankings and user engagement.
                            </p>

                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                        </RevealOnScroll>
                    </div>

                    <div className="expectations-grid">
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">🚀</div>
                                <h4>Performance First</h4>
                                <p>Lightning fast load times and optimized interactive elements.</p>
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
                                <div className="icon">🔍</div>
                                <h4>SEO Optimized</h4>
                                <p>Built-in best practices to help your business reach more people.</p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="expectation-card glass">
                                <div className="icon">💡</div>
                                <h4>Modern Tech</h4>
                                <p>Leveraging latest tools like React, TypeScript & Vite.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

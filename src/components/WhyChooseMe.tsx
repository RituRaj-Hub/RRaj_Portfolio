import React from 'react';
import './WhyChooseMe.css';
import { RevealOnScroll } from './RevealOnScroll';

const WhyChooseMe: React.FC = () => {
    return (
        <section className="section-padding why-choose-me">
            <div className="container">
                <div className="why-content-wrapper">
                    <div className="why-text">
                        <RevealOnScroll>
                            <h2 className="section-title">Why <span className="text-gradient">Choose Me?</span></h2>
                            <p className="why-description">
                                I don't just write code; I provide solutions. My approach is centered around understanding your business goals and delivering digital products that drive results.
                            </p>
                        </RevealOnScroll>

                        <ul className="benefits-list">
                            <RevealOnScroll>
                                <li className="benefit-item">
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <h4>Client-Centric Approach</h4>
                                        <p>Clear communication and regular updates throughout the process.</p>
                                    </div>
                                </li>
                            </RevealOnScroll>
                            <RevealOnScroll>
                                <li className="benefit-item">
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <h4>Clean & Scalable Code</h4>
                                        <p>Built for the future with industry-standard best practices.</p>
                                    </div>
                                </li>
                            </RevealOnScroll>
                            <RevealOnScroll>
                                <li className="benefit-item">
                                    <span className="check-icon">✓</span>
                                    <div>
                                        <h4>End-to-End Support</h4>
                                        <p>From concept to deployment and post-launch maintenance.</p>
                                    </div>
                                </li>
                            </RevealOnScroll>
                        </ul>
                    </div>

                    <div className="why-visual glass">
                        <RevealOnScroll>
                            <div className="stat-box">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">On-Time Delivery</span>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="stat-box">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support Available</span>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;

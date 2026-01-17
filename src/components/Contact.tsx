import React from 'react';
import './Contact.css';
import { RevealOnScroll } from './RevealOnScroll';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                        <p className="section-subtitle">Let's work together to build something great</p>
                    </div>
                </RevealOnScroll>

                <div className="contact-container">
                    <RevealOnScroll>
                        <div className="contact-info glass">
                            <h3>Contact Information</h3>
                            <p>Ready to start your next project? Reach out to me directly.</p>

                            <div className="info-item">
                                <span className="icon">📧</span>
                                <span>hello@example.com</span>
                            </div>
                            <div className="info-item">
                                <span className="icon">📱</span>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <span>New York, NY</span>
                            </div>

                            <div className="social-links">
                                <a href="#" className="social-icon">LinkedIn</a>
                                <a href="#" className="social-icon">GitHub</a>
                                <a href="#" className="social-icon">Twitter</a>
                            </div>

                            <a href="/Rituraj.pdf" download="Rituraj.pdf" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                                Download Resume
                            </a>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll width="100%">
                        <form className="contact-form glass">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;

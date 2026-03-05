import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* LEFT SECTION */}
                    <div className="footer-section footer-about">
                        <h3 className="footer-name">Ritu Raj</h3>
                        <p className="footer-role">Frontend Developer specializing in React</p>
                        <p className="footer-description">
                            I build fast, scalable and user-focused web applications.
                        </p>
                        <div className="availability-badge">
                            <span className="status-dot">🟢</span>
                            <span>Open to Remote & Freelance Opportunities</span>
                        </div>
                    </div>

                    {/* MIDDLE SECTION - Quick Links */}
                    <div className="footer-section footer-links">
                        <h4 className="footer-section-title">Quick Links</h4>
                        <ul className="footer-link-list">
                            <li>
                                <a href="#home" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="footer-link">Skills</a>
                            </li>
                            <li>
                                <a href="#services" className="footer-link">Services</a>
                            </li>
                            <li>
                                <a href="#projects" className="footer-link">Work</a>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT SECTION - Connect */}
                    <div className="footer-section footer-connect">
                        <h4 className="footer-section-title">Connect</h4>
                        <ul className="footer-link-list">
                            <li>
                                {/* <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="footer-link footer-social-link"
                                >
                                    GitHub
                                </a> */}
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link footer-social-link"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:ritulearning0801@gmail.com"
                                    className="footer-link footer-social-link"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM COPYRIGHT BAR */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Ritu Raj | Frontend Developer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

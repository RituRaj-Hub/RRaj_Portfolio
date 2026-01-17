import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo-link">
                    <img src="/logo.png" alt="DevPortfolio Logo" className="logo-img" />
                </a>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Work</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-nav">Contact</a>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

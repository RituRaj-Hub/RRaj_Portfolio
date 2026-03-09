import React, { useState } from 'react';
import './Contact.css';
import { RevealOnScroll } from './RevealOnScroll';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                                <a href="mailto:ritulearning0801@gmail.com">ritulearning0801@gmail.com</a>
                            </div>
                            <div className="info-item">
                                <span className="icon">📱</span>
                                <a href="tel:+918800563204">+918800563204</a>
                            </div>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <span>Patna, India</span>
                            </div>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/ritu-raj-1448a51b1" target='_blank' className="social-icon">LinkedIn</a>
                                {/* <a href="#" className="social-icon">GitHub</a>
                                <a href="#" className="social-icon">Twitter</a> */}
                            </div>

                            <a href="/my_resume/RituRajj.pdf" download="RituRajj.pdf" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                                Download Resume
                            </a>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll width="100%">
                        <form className="contact-form glass" onSubmit={async (e) => {
                            e.preventDefault();
                            setStatus('loading');
                            const form = e.currentTarget;
                            const formData = new FormData(form);

                            try {
                                // 2. Google Sheets Integration
                                const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5C_YV_T7_H1RwO-YIx3jjgvkZ6a0MUpl0_YF2rMD4Xp8PdOCL5DtXqg_ubEVxNpk/exec';

                                await fetch(SCRIPT_URL, {
                                    method: 'POST',
                                    body: formData
                                });

                                setStatus('success');
                                form.reset();
                            } catch (error) {
                                console.error('Error submitting form:', error);
                                setStatus('error');
                            }
                        }}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="" required></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p style={{ color: '#10b981', marginTop: '1rem', fontSize: '0.9rem' }}>
                                    Message sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem' }}>
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import './Services.css';
import { RevealOnScroll } from './RevealOnScroll';

const Services: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Website Development",
            description: "Custom, high-performance websites built with React, TypeScript, and modern CSS. Fully responsive and accessible.",
            icon: "💻"
        },
        {
            id: 2,
            title: "SEO & Performance",
            description: "Optimize your online presence with technical SEO, Core Web Vitals improvements, and speed optimization.",
            icon: "⚡"
        },
        {
            id: 3,
            title: "Google Business Growth",
            description: "Expert setup and management of Google Business Profiles to increase local visibility and customer trust.",
            icon: "📍"
        },
        {
            id: 4,
            title: "Digital Solutions",
            description: "Tailored IT solutions and automation strategies to streamline your business operations.",
            icon: "🛠️"
        }
    ];

    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">My <span className="text-gradient">Services</span></h2>
                        <p className="section-subtitle">Comprehensive digital solutions for your business</p>
                    </div>
                </RevealOnScroll>

                <div className="services-grid">
                    {services.map((service) => (
                        <RevealOnScroll key={service.id}>
                            <div className="service-card glass">
                                <div className="service-icon-wrapper">
                                    <span className="service-icon">{service.icon}</span>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <a href="#contact" className="service-link">Learn More →</a>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

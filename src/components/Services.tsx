import React from 'react';
import './Services.css';
import { RevealOnScroll } from './RevealOnScroll';

const Services: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Building scalable React applications with clean architecture, responsive layouts, and modern UI practices.",
            icon: "💻"
        },
        {
            id: 2,
            title: "Performance Optimization",
            description: "Improving load speed, rendering efficiency, and user experience through modern frontend performance techniques.",
            icon: "⚡"
        },
        {
            id: 3,
            title: "API Integration",
            description: "Connecting frontend applications with REST APIs, handling data states, and ensuring smooth interactions.",
            icon: "📍"
        },
        {
            id: 4,
            title: "Cloud Deployment",
            description: "Deploying frontend applications using AWS S3 and EC2 with production-ready configurations.",
            icon: "☁️"
        }
    ];

    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">Core <span className="text-gradient">Expertise</span></h2>
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

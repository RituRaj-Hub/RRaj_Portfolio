import React from 'react';
import './Projects.css';
import { RevealOnScroll } from './RevealOnScroll';

const Projects: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Bihar Sports Mahasangram",
            // category: "Full Stack Web Application",
            description: "A comprehensive sports event management platform for Bihar Sports Mahasangram 2026, featuring school registrations and student enrollments.",
            image: "/bihar-sports.png",
            tech: ["React", "TypeScript", "Tailwind CSS", "AWS"],
            link: "https://biharsportsmahasangram.in/"
        },
        {
            id: 2,
            title: "E-Commerce Redesign",
            // category: "UI/UX & Frontend",
            description: "Modern, high-conversion shopping experience with optimized performance and seamless checkout flow.",
            image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            tech: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
            link: "#"
        },
        {
            id: 3,
            title: "SaaS Landing Page",
            // category: "Web Development",
            description: "High-performance landing page for a SaaS product, focused on SEO and lead generation.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80",
            tech: ["React", "Vite", "GSAP", "Analytics"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>
                        <p className="section-subtitle">A selection of my recent projects and experiments</p>
                    </div>
                </RevealOnScroll>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <RevealOnScroll key={project.id}>
                            <div className="project-card group">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <a href={project.link} className="btn btn-primary project-btn" target='_blank'>View Project</a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    {/* <span className="project-category">{project.category}</span> */}
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                <div className="view-more-container">
                    <RevealOnScroll>
                        <a href="#" className="btn btn-secondary">View All Projects</a>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Projects;

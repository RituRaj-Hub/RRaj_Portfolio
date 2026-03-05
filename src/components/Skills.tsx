import React from 'react';
import './Skills.css';
import { RevealOnScroll } from './RevealOnScroll';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Frontend & Engineering",
            skills: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "TypeScript", "Responsive UI Development", "REST API Integration", "Component Architecture", "Performance Optimization", "Modern CSS & Animations"]
        },
        {
            title: "UI Architecture",
            skills: ["UI Performance Optimization", "Code Splitting & Lazy Loading", "Image Optimization", "SEO-Friendly Frontend Structure", "Reusable Component Design", "State & API Data Handling", "Accessibility Best Practices", "Cross-Browser Compatibility"]
        },
        {
            title: "Tools & Workflow",
            skills: ["Git Version Control", "AWS Deployment (S3 / EC2)", "CI/CD Basics", "VS Code", "Chrome DevTools", "Figma Collaboration", "Responsive Testing", "Debugging & Performance Auditing"]
        }
    ];

    return (
        <section id="skills" className="section-padding skills-section">
            <div className="container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2 className="section-title">Skills & <span className="text-gradient">Technologies</span></h2>
                        <p className="section-subtitle">The tools I use to build scalable digital products</p>
                    </div>
                </RevealOnScroll>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <RevealOnScroll key={index}>
                            <div className="skill-card glass">
                                <h3 className="skill-category-title">{category.title}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill, idx) => (
                                        <span key={idx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import './Skills.css';
import { RevealOnScroll } from './RevealOnScroll';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Frontend & Engineering",
            skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Modern CSS / Animations", "Performance Optimization"]
        },
        {
            title: "Digital Business Solutions",
            skills: ["SEO Strategy", "Google Business Profile", "Local Search Optimization", "Review Management", "Digital Marketing", "Analytics Setup"]
        },
        {
            title: "Tools & Workflow",
            skills: ["Git Version Control", "Vite & Build Tools", "VS Code", "Chrome DevTools", "Figma / UI Design", "Responsive Testing"]
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

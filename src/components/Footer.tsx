import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

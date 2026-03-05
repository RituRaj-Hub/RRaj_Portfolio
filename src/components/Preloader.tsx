import React, { useEffect, useState } from 'react';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  const lines = [
    '> npm run build',
    '> compiling modules...',
    '> optimizing assets...',
    '> build complete'
  ];

  useEffect(() => {
    // Progress calculation
    const duration = 3000; // 3 seconds
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Typing effect
    lines.forEach((line, index) => {
      setTimeout(() => {
        setTypedLines((prev) => [...prev, line]);
      }, (duration / lines.length) * index);
    });

    // Complete and fade out
    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 600); // Wait for transition duration
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* User Logo */}
        <div className="loader-logo-wrapper">
          <img src="/logo.png" alt="Logo" className="loader-logo" />
        </div>

        <h1 className="loader-title">Initializing Portfolio<span>...</span></h1>

        <div className="terminal-container">
          {typedLines.map((line, index) => (
            <p key={index} className="terminal-line">{line}</p>
          ))}
          <span className="terminal-cursor">|</span>
        </div>

        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

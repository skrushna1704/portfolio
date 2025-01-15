import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button 
      className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : ''}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 
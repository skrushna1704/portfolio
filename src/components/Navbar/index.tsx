import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} ${styles.animatedLogo}`}>
          <span className={styles.logoText}>S</span>
          <span className={styles.logoText}>G</span>
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="#about" onClick={handleMenuItemClick}>About</Link>
          <Link href="#skills" onClick={handleMenuItemClick}>Skills</Link>
          <Link href="#projects" onClick={handleMenuItemClick}>Projects</Link>
          <Link href="#experience" onClick={handleMenuItemClick}>Experience</Link>
          <Link href="#contact" onClick={handleMenuItemClick}>Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
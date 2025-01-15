import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Shrikrushna Gaikwad. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="https://github.com/skrushna1704" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shrikrushna-gaikwad-aa95a4236/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:skrushna1704@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
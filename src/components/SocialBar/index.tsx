import styles from './SocialBar.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const SocialBar = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/skrushna1704',
      color: 'var(--primary)'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/shrikrushna-gaikwad-aa95a4236/',
      color: 'var(--primary)'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={20} />,
      url: 'mailto:skrushna1704@gmail.com',
      color: 'var(--primary)'
    },
    {
      name: 'CV',
      icon: <FaFileAlt size={20} />,
      url: '/doc/Resume.pdf',
      color: 'var(--primary)',
      download: true
    }
  ];

  return (
    <div className={styles.socialBar}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={styles.socialLink}
          target={social.download ? '_self' : '_blank'}
          rel="noopener noreferrer"
          download={social.download}
          title={social.name}
        >
          <span className={styles.icon}>{social.icon}</span>
          <span className={styles.label}>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar; 
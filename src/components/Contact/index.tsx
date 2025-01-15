import { useState } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email using mailto
    window.location.href = `mailto:skrushna1704@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <p>Feel free to reach out through any of these channels:</p>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:skrushna1704@gmail.com">
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a href="https://github.com/skrushna1704" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shrikrushna-gaikwad-aa95a4236/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="button button-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
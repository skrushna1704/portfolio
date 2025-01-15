import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            I am a passionate Fullstack Developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I create seamless, 
            user-centric solutions that solve real-world problems.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <h3>Frontend Development</h3>
              <p>Creating responsive and interactive user interfaces using React and Next.js</p>
            </div>
            <div className={styles.detail}>
              <h3>Backend Development</h3>
              <p>Building robust APIs and server-side applications with Node.js and Express</p>
            </div>
            <div className={styles.detail}>
              <h3>Database Management</h3>
              <p>Designing and managing databases using MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js'] },
    { category: 'Database', items: ['MongoDB'] },
    { category: 'Tools', items: ['Git', 'Cypress'] },
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.category} className={styles.card}>
              <h3 className={styles.category}>{skill.category}</h3>
              <ul className={styles.list}>
                {skill.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
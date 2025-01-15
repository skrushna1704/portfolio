import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Front end Developer',
      company: 'Enterprise Minds, Inc',
      period: 'June 2023 - Present',
      description: 'Client: Beckn Protocol — Working on decentralized networks and developing multiple BAPs (Beckn Application Platform) for different communities.',
      achievements: [
        'Developed multiple Beckn Application Platforms (BAPs) for various communities, including mobility, retail, and tourism',
        'Contributed to the development of reusable components that enhanced the consistency and efficiency of BAPs',
        'Played a key role in architectural decisions impacting the nature and scalability of the Beckn protocol',
        'Provided on-call support for critical issues and worked on root cause analysis for incident resolution'
      ],
    },
    {
      title: 'Front end Developer',
      company: 'Enterprise Minds, Inc',
      period: 'Sep 2022 - May 2023',
      description: 'Worked on Codelense — A tool for developers to enhance web application insights, allowing session replay and analysis.',
      achievements: [
        'Developed a responsive website optimized for both desktop and mobile devices',
        'Implemented a single-page application using React and Redux, improving overall performance',
        'Utilized HTML, CSS, JavaScript, and React.js to create a dynamic, interactive user interface',
        'Enhanced user experience through comprehensive web application monitoring and debugging tools'
      ],
    },
    {
      title: 'Software Developer Internship',
      company: 'Enterprise Minds, Inc',
      period: 'Apr 2022 - Aug 2022',
      description: 'Gained hands-on experience in modern web development technologies and best practices.',
      achievements: [
        'Gained hands-on experience in React.js, JavaScript, HTML5, CSS3, and SASS',
        'Focused on implementing web development fundamentals and team collaboration',
        'Improved overall user experience by making necessary changes based on requirements',
        'Worked on real-world projects while learning industry best practices'
      ],
    },
  ];

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.content}>
                <h3 className={styles.jobTitle}>{exp.title}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
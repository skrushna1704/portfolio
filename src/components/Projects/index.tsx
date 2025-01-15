import Image from "next/image";
import styles from "./Projects.module.css";
import Ecomm from "../../../public/images/ecomm.png";
import Weather from "../../../public/images/weather.png";
import Todo from "../../../public/images/todo.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Bazzar",
      description:
        "A full-stack web application built with Next.js and MongoDB (E-Bazzar)",
      image: Ecomm,
      technologies: ["Next.js", "MongoDB", "Chakra UI", "Express JS"],
      liveUrl: "https://e-bazzar.vercel.app",
      githubUrl: "https://github.com/yourusername/e-bazzar",
    },
    {
      title: "Backend API",
      description:
        "A Backend app Creating API's Like login, logout, Fetch Product",
      image: Weather,
      technologies: ["Express Js", "MpngoDb"],
      liveUrl: "https://github.com/skrushna1704/backend",
      githubUrl: "https://github.com/skrushna1704/backend",
    },
    {
      title: "Todo App",
      description: "A Frontend app For todo",
      image: Todo,
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://todokrushna.vercel.app/",
      githubUrl: "https://github.com/skrushna1704/Todo2025",
    },
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a
                    href={project.liveUrl}
                    className="button button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="button button-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import Image from 'next/image';
import styles from './Hero.module.css';
import profile from '../../../public/images/profile2.png'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const name = "Krushna Gaikwad";
  
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.content}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Hi, I'm{' '}
            <span className={styles.name}>
              {name.split('').map((char, index) => (
                <span 
                  key={index} 
                  className={`${styles.nameChar} ${isVisible ? styles.visible : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    marginLeft: char === ' ' ? '0.25em' : '0'
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p className={styles.subtitle}>
            Fullstack Developer crafting seamless web experiences
          </p>
          <div className={styles.cta}>
            <a href="#contact" className="button button-primary no-underline" 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}   >
              Get in Touch
            </a>
            <a href="/doc/Resume.pdf" className="button button-outline" download style={{ 
              backgroundColor: 'rgb(0, 123, 255)', 
              color: '#FFFFFF', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              textDecoration: 'none' 
            }} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}>
              Download CV
            </a>
          </div>
          <div className={styles.social}>
            <a href="https://github.com/skrushna1704" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shrikrushna-gaikwad-aa95a4236/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:skrushna1704@gmail.com">
              Email
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={profile}
            alt="krushna Gaikwad"
            width={300}
            height={300}
            className={styles.image}
            priority
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 
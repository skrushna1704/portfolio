import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import SocialBar from '@/components/SocialBar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Shrikrushna Gaikwad - Fullstack Developer</title>
        <meta 
          name="description" 
          content="Fullstack developer specializing in building exceptional digital experiences" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SocialBar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

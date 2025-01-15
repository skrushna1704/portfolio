import { useState } from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      date: '2024-03-20',
      slug: 'getting-started-nextjs'
    },
    // Add more blog posts here
  ]);

  return (
    <section className={styles.blog}>
      <h1>Blog</h1>
      <div className={styles.grid}>
        {posts.map(post => (
          <article key={post.id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <time>{new Date(post.date).toLocaleDateString()}</time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog; 
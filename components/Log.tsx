// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/Log.tsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Log.module.css';

interface LogProps {
  title: string;
  content: string;
  imageSrc?: string;
}

const Log: React.FC<LogProps> = ({ title, content, imageSrc }) => {
  const [likes, setLikes] = useState<number>(0);
  const { theme } = useTheme();

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <section className={`${styles.log} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {imageSrc && <img src={imageSrc} alt={title} className={styles.image} />}
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>

      <div className={styles.likeSection}>
        <button onClick={handleLike} className={styles.likeButton}>Like</button>
        <span className={styles.likeCount}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
    </section>
  );
};

export default Log;
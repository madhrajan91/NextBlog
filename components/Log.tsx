import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import styles from '../styles/Log.module.css';

interface LogProps {
  title: string;
  content: string;
  imageSrc?: string;
  id: string; // Add id prop to uniquely identify each log
}

const Log: React.FC<LogProps> = ({ title, content, imageSrc, id }) => {
  const [likes, setLikes] = useState<number>(0);
  const { theme } = useTheme();

  // Load likes from localStorage when component mounts
  useEffect(() => {
    const savedLikes = localStorage.getItem(`log-likes-${id}`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    // Save to localStorage
    localStorage.setItem(`log-likes-${id}`, newLikes.toString());
  };

  return (
    <section className={`${styles.log} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className={styles.image}
        />
      )}
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>
      <div className={styles.likeSection}>
        <button onClick={handleLike} className={styles.likeButton}>
          Like
        </button>
        <span className={styles.likeCount}>
          {likes} {likes === 1 ? 'Like' : 'Likes'}
        </span>
      </div>
    </section>
  );
};

export default Log;
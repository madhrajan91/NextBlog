// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/Card.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import styles from './Card.module.css';

interface CardProps {
  text: string;
  imageSrc?: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ text, imageSrc, id }) => {
  const router = useRouter();
  const { theme } = useTheme();

  const handleClick = () => {
    router.push(`/logs/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.card} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
      {imageSrc && <img src={imageSrc} alt={text} className={styles.image} />}
      <p>{text}</p>
    </div>
  );
};

export default Card;
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
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
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={text}
          width={150}
          height={150}
          className={styles.image}
        />
      )}
      <p>{text}</p>
    </div>
  );
};

export default Card;
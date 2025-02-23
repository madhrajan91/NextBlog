import React, { useState } from 'react';
import styles from '../app/page.module.css';

interface PostProps {
  title: string;
  content: string[];
  imageSrc?: string;
}

const Post: React.FC<PostProps> = ({ title, content, imageSrc }) => {
  const [likes, setLikes] = useState<number>(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <section className={styles.post}>
      {imageSrc && <img src={imageSrc} alt={title} className={styles.image} />}
      <h1 className={styles.title}>{title}</h1>
      {content.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>{paragraph}</p>
      ))}
      <div className={styles.likeSection}>
        <button onClick={handleLike} className={styles.likeButton}>Like</button>
        <span className={styles.likeCount}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
      </div>
    </section>
  );
};

export default Post;
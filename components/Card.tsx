import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  text: string;
  imageSrc?: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ text, imageSrc, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
    >
      {imageSrc && <img src={imageSrc} alt={text} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />}
      <p>{text}</p>
    </div>
  );
};

export default Card;
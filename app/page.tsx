'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Card from "../components/Card";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from './page.module.css';

export default function Page() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  const postContent = [
    "This is a sample modern web page built with Next.js. Below, you will find a grid of cards displaying some sample content.",
    "Each card is styled to look clean and modern, fitting perfectly within the grid layout. Enjoy exploring the content!"
  ];

  const handleCardClick = (index: number) => {
    setSelectedPost(index);
  };

  const handleHomeClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className={styles.container}>
      <Header onHomeClick={handleHomeClick} />
      <main className={styles.main}>
        {selectedPost !== null ? (
          <Post title={`Post ${selectedPost + 1}`} content={postContent} />
        ) : (
          <>
            <Post title="Introduction" content={postContent} />
            <div className={styles.grid}>
              {Array.from({ length: 9 }).map((_, index) => (
                <Card
                  key={index}
                  text={`This is card number ${index + 1}`}
                  imageSrc={index < 3 ? images[index] : undefined}
                  id={index + 1}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

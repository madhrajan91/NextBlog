// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/pages/index.tsx
'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Card from "../components/Card";
import Log from "../components/Log";
import Header from "../components/Header";
import Sidebar from '@/components/Sidebar';
import Footer from "../components/Footer";
import styles from './page.module.css';
import commonStyles from '../app/common.module.css';
import withTheme from '../context/withTheme';

const Page = () => {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);
  const [logs, setLogs] = useState<{ title: string; content: string }[]>([
    {
      title: "Introduction",
      content: "This is a sample modern web page built with Next.js. Below, you will find a grid of cards displaying some sample content.",
    },
  ]);

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  const handleCardClick = (index: number) => {
    setSelectedLog(index);
  };

  const handleHomeClick = () => {
    setSelectedLog(null);
  };

  return (
    <>
      <Header onHomeClick={handleHomeClick} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          {selectedLog !== null ? (
            <Log title={logs[selectedLog].title} content={logs[selectedLog].content} />
          ) : (
            <>
              {logs.map((log, index) => (
                <Log key={index} title={log.title} content={log.content} />
              ))}
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
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default withTheme(Page);
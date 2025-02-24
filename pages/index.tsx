'use client'
import React, { useState } from 'react';
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
  const [logs] = useState<{ id: string; title: string; content: string }[]>([
    {
      id: "1",
      title: "Introduction",
      content: "This is a sample modern web page built with Next.js.",
    },
  ]);



  const handleHomeClick = () => {
    setSelectedLog(null);
  };

  return (
    <>
      <Header onHomeClick={handleHomeClick} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          {selectedLog !== null ? (
            <Log
              id={logs[selectedLog].id}
              title={logs[selectedLog].title}
              content={logs[selectedLog].content}
            />
          ) : (
            <>
              {logs.map((log, index) => (
                <Log
                  key={index}
                  id={log.id}
                  title={log.title}
                  content={log.content}
                />
              ))}
              <div className={styles.grid}>
                {Array.from({ length: 9 }).map((_, index) => (
                  <Card
                    key={index}
                    text={`This is card number ${index + 1}`}
                    imageSrc={index < 3 ? "https://via.placeholder.com/150" : undefined}
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
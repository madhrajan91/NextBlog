// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/pages/add-log.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddLogForm from '../components/AddLogForm';
import commonStyles from '../app/common.module.css';
import withTheme from '../context/withTheme';

const AddLogPage = () => {
  const router = useRouter();

  const handleAddLog = (title: string, content: string) => {
    // Here you can handle the log submission, e.g., save it to a database
    console.log('Log added:', { title, content });
    router.push('/'); // Redirect to the home page after adding the log
  };

  return (
    <>
      <Header onHomeClick={() => router.push('/')} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          <AddLogForm onAddLog={handleAddLog} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default withTheme(AddLogPage);
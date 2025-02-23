// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/pages/add-post.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddPostForm from '../components/AddPostForm';
import commonStyles from '../app/common.module.css';

const AddPostPage = () => {
  const router = useRouter();

  const handleAddPost = (title: string, content: string) => {
    // Here you can handle the post submission, e.g., save it to a database
    console.log('Post added:', { title, content });
    router.push('/'); // Redirect to the home page after adding the post
  };

  return (
    <div className={commonStyles.container}>
      <Header onHomeClick={() => router.push('/')} />
      <div className={commonStyles.maincontainer}>
        <main className={commonStyles.main}>
          <AddPostForm onAddPost={handleAddPost} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AddPostPage;
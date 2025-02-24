// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/AddLogForm.tsx
import React, { useState } from 'react';
import styles from './AddLogForm.module.css';

interface AddLogFormProps {
  onAddLog: (title: string, content: string) => void;
}

const AddLogForm: React.FC<AddLogFormProps> = ({ onAddLog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLog(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Log</button>
    </form>
  );
};

export default AddLogForm;
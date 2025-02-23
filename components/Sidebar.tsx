// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/Sidebar.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <aside className={`${styles.sidebar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h2>Sidebar</h2>
      <p>This is the sidebar content.</p>
    </aside>
  );
};

export default Sidebar;
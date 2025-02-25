// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  console.log('toggling theme');
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>My Modern Web Page</h1>
        <nav className={styles.nav}>
          <a href="#" onClick={onHomeClick} className={styles.homeLink}>Home</a>
          <Link href="/add-log" legacyBehavior>
            <a className={styles.addPostLink}>Add Log</a>
          </Link>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            Toggle Theme
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
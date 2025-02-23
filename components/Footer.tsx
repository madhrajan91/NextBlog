// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/components/Footer.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 My Modern Web Page</p>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Terms of Service</a>
          <a href="#" className={styles.link}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
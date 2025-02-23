import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Header.module.css';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  //const { theme, toggleTheme } = useTheme();

  //console.log(`Header component: Current theme is ${theme}`);
  //<button onClick={toggleTheme} className={styles.themeToggle}>Toggle Theme</button>
       
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>My Modern Web Page</h1>
        <nav className={styles.nav}>
          <a href="#" onClick={onHomeClick} className={styles.homeLink}>Home</a>
         </nav>
      </div>
    </header>
  );
};

export default Header;
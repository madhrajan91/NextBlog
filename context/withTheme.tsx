// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/context/withTheme.tsx
import React from 'react';
import { useTheme } from './ThemeContext';
import commonStyles from '../app/common.module.css';

const withTheme = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  return (props: P) => {
    const { theme } = useTheme();

    return (
      <div className={`${commonStyles.container} ${theme === 'dark' ? commonStyles.dark : commonStyles.light}`}>
        <Component {...props} />
      </div>
    );
  };
};

export default withTheme;
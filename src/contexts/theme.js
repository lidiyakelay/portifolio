import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initialize themeName from localStorage, if not set default to 'dark'
  const [themeName, setThemeName] = useState(
    localStorage.getItem('themeName') || 'dark'
  );

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set theme based on user's system preference only if not manually set in localStorage
    if (!localStorage.getItem('themeName')) {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    }

    // Add event listener to detect system theme changes
    darkMediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light');
      }
    });

    // Cleanup event listener on unmount
    return () => darkMediaQuery.removeEventListener('change', () => {});
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name); // Save preference in localStorage
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };

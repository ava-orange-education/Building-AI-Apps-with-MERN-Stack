import React, { createContext, useContext, useState } from 'react';

  const ThemeContext = createContext();

  function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <button
        style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle Theme
      </button>
    );
  }

  function App() {
    return (
      <ThemeProvider>
        <ThemedButton />
      </ThemeProvider>
    );
  }
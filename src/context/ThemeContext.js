import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// define our toggle context, with a default empty toggle function
const ThemeToggleContext = createContext({
  toggle: () => {},
  theme: { mode: 'dark' },
});

// define exportable useContext hook object
export const useTheme = () => useContext(ThemeToggleContext);

export const TodoThemeProvider = ({ children }) => {
  // default mode is set to `light`
  const [theme, setTheme] = useState({
    mode: 'dark',
  });

  // define toggle function
  const toggle = () => {
    const mode = theme.mode === 'light' ? `dark` : `light`;

    setTheme({ mode: mode });
  };

  // render both contexts, then Wrapper, then children
  return (
    <ThemeToggleContext.Provider
      value={{
        theme: theme,
        toggle: toggle,
      }}
    >
      <ThemeProvider
        theme={{
          mode: theme.mode,
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;

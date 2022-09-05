
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useCallback, useState } from "react";

const defaultValue = "default value";

export const ThemeContext = createContext(defaultValue);

const themeMUI = {
  dark: createTheme({
    palette: {
      primary: {
        main: "#b8383d",
      },
    },
  }),
  light: createTheme({
    palette: {
      primary: {
        main: "#808080",
        light: "#b8383d17",
      },
    },
  }),
};

const themes = {
  dark: {
    color: "#000",
  },
  light: {
    color: "#fff",
  },
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const themeSetter = useCallback((name) => {
    if (themes[name]) {
      setTheme({
        name,
        theme: themes[name],
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={themeMUI[theme.name]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
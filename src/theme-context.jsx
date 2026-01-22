import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const MyThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const next = prev === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', next);
          return next;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#90caf9' : '#1976d2',
          },
        },
        typography: {
          fontFamily: 'Inter, Roboto, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import Home from '@pages/Home'
import { theme } from './src/components/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

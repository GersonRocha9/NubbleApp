import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

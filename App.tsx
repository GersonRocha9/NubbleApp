import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

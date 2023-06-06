import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="headingMedium" color="carrotSecondary">
            Faça login para entrar
          </Text>

          <Button
            title="Enviar"
            marginVertical="s12"
            onPress={() => {
              console.log('oi');
            }}
          />
          <Button
            title="Enviar"
            loading
            onPress={() => {
              console.log('oi 2');
            }}
          />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

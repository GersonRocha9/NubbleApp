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
        <Box gap="s16" paddingHorizontal="s24">
          <Text preset="headingMedium" color="carrotSecondary">
            Faça login para entrar
          </Text>

          <Button title="Enviar" onPress={() => {}} />

          <Button preset="outline" title="Criar conta" onPress={() => {}} />

          <Button title="Enviar" loading onPress={() => {}} />

          <Button title="Enviar" loading disabled onPress={() => {}} />

          <Button
            title="Enviar"
            loading
            preset="outline"
            disabled
            onPress={() => {}}
          />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

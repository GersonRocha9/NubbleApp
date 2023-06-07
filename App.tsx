import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box gap="s16" paddingHorizontal="s24">
          <Text preset="headingMedium" color="carrotSecondary">
            Faça login para entrar
          </Text>

          <Button title="Primary" />

          <Button variant="outline" title="Outline" />

          <Button title="Primary Loading" loading />

          <Button variant="outline" title="Outline Loading" loading />

          <Button title="Primary Loading Disabled" loading disabled />

          <Button
            variant="outline"
            title="Outline Loading Disabled"
            loading
            disabled
          />

          <Box flexDirection="row" gap="s16">
            <Icon name="eyeOn" color="carrotSecondary" />
            <Icon name="eyeOff" />
            <Icon name="trash" color="carrotSecondary" />
            <Icon name="heart" />
            <Icon name="heartFill" />
          </Box>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

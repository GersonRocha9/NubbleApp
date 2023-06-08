import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {TextInput} from './src/components/TextInput/TextInput';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text mb="s8" preset="headingLarge">
            Olá
          </Text>

          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            errorMessage="E-mail inválido"
            boxProps={{
              mb: 's16',
            }}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            textContentType="password"
            secureTextEntry
            RightComponent={<Icon name="eyeOn" size={24} color="gray2" />}
            boxProps={{
              mb: 's8',
            }}
          />

          <Text preset="paragraphSmall" bold color="primary" mb="s48">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mb="s12" />

          <Button title="Criar uma conta" variant="outline" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

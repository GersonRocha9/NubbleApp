import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  function handleSignUp() {
    // TODO: implement
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        label="Seu username"
        placeholder="@"
        boxProps={{
          mb: 's16',
        }}
      />

      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{
          mb: 's16',
        }}
      />

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
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
          mb: 's48',
        }}
      />

      <Button onPress={handleSignUp} title="Criar minha conta" />
    </Screen>
  );
}

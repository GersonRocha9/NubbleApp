import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function handleSignUp() {
    reset({
      icon: {
        name: 'checkRound',
        color: 'success',
      },
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
    });
  }

  return (
    <Screen canGoBack scrollable>
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

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's48',
        }}
      />

      <Button onPress={handleSignUp} title="Criar minha conta" />
    </Screen>
  );
}

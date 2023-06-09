import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function handleSendEmailToRecoverPassword() {
    reset({
      icon: {
        name: 'messageRound',
        color: 'greenPrimary',
      },
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>

      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        boxProps={{
          mb: 's48',
        }}
      />

      <Button
        title="Recuperar senha"
        onPress={handleSendEmailToRecoverPassword}
      />
    </Screen>
  );
}

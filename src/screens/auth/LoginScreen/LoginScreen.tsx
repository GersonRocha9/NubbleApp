import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import React from 'react';
import {RootStackParamList} from '../../../routes/Routes';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  return (
    <Screen>
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
        boxProps={{
          mb: 's16',
        }}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's8',
        }}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="primary"
        mb="s48"
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mb="s12" />

      <Button
        title="Criar uma conta"
        variant="outline"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </Screen>
  );
}

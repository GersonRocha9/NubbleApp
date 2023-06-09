import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  const { icon, title, description } = route.params;

  return (
    <Screen>
      <Icon name={icon.name} color={icon.color} size={48} />

      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>

      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>

      <Button
        title="Voltar ao início"
        mt="s40"
        onPress={() => navigation.goBack()}
      />
    </Screen>
  );
}

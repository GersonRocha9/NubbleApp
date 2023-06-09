import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../../routes/Routes';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route}: ScreenProps) {
  const {icon, title, description} = route.params;

  return (
    <Screen>
      <Icon name={icon.name} color={icon.color} size={48} />

      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>

      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>

      <Button title="Começar" mt="s40" />
    </Screen>
  );
}

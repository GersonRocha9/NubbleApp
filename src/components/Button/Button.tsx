import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';

type ButtonPreset = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      paddingHorizontal="s20"
      height={50}
      backgroundColor="primary"
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text preset="paragraphMedium" bold color="primaryContrast">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

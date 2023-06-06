import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      paddingHorizontal="s20"
      height={50}
      backgroundColor={loading ? 'gray4' : 'primary'}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={loading}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          variant="paragraphMedium"
          bold
          style={{
            color: 'white',
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

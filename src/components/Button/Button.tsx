import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

import React from 'react';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text/Text';
import {ButtonVariants} from './buttonVariants';

export type ButtonVariant = 'primary' | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  variant = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonVariant =
    ButtonVariants[variant][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonVariant.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonVariant.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonVariant.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

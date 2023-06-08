import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React, {ReactElement, useRef} from 'react';

import {useAppTheme} from '../../hooks/useAppTheme';

interface Props extends TextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  RightComponent,
  errorMessage,
  boxProps,
  ...props
}: Props) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  return (
    <Box {...boxProps}>
      <Pressable
        onPress={() => {
          inputRef.current?.focus();
        }}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box
          borderWidth={errorMessage ? 2 : 1}
          borderColor={errorMessage ? 'error' : 'gray2'}
          borderRadius="s12"
          padding="s16"
          flexDirection="row">
          <RNTextInput
            ref={inputRef}
            style={$textInputStyle}
            placeholderTextColor={colors.gray2}
            {...props}
          />

          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error" mt="s4">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
};

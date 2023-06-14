import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';

import { Icon } from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(prev => !prev);
  }

  return (
    <TextInput
      textContentType="password"
      secureTextEntry={showPassword}
      {...props}
      RightComponent={
        <Icon
          name={showPassword ? 'eyeOn' : 'eyeOff'}
          size={24}
          color="gray2"
          onPress={toggleShowPassword}
        />
      }
    />
  );
}

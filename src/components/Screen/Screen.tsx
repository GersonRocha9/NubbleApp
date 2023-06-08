import React, {ReactNode} from 'react';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      paddingHorizontal="s24"
      style={{
        paddingTop: top,
      }}>
      {canGoBack && (
        <Box flexDirection="row" gap="s8" alignItems="center" mb="s24">
          <Icon name="arrowLeft" size={20} color="primary" />
          <Text preset="paragraphMedium" semiBold>
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}

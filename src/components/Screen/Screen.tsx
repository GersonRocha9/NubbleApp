import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {ReactNode} from 'react';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

import {Box} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          paddingBottom="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
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
      </Container>
    </KeyboardAvoidingView>
  );
}

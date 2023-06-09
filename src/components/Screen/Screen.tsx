import React, {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

import {useNavigation} from '@react-navigation/native';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

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
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={keyboardStyle}
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
            <TouchableOpacityBox
              flexDirection="row"
              gap="s8"
              alignItems="center"
              mb="s24"
              onPress={navigation.goBack}>
              <Icon name="arrowLeft" size={20} color="primary" />
              <Text preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const keyboardStyle = {
  flex: 1,
};

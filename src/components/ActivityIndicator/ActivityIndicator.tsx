import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import React from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeColors } from '../../theme/theme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({ color, ...activityIndicatorProps }: Props) {
  const { colors } = useAppTheme();

  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}

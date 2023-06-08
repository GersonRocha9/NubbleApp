import React, {ReactNode} from 'react';

import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ScreenProps {
  children: ReactNode;
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      paddingHorizontal="s24"
      style={{
        paddingTop: top,
      }}>
      {children}
    </Box>
  );
}

import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

interface Props {
  children: ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor,
        flex: 1,
      }}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor,
        flex: 1,
      }}>
      {children}
    </View>
  );
}

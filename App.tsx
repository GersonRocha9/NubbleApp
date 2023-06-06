import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App() {
  return (
    <SafeAreaView>
      <Text
        preset="headingLarge"
        style={{
          fontFamily: 'Satoshi Italic',
        }}>
        Heading Large
      </Text>
      <Text
        preset="paragraphLarge"
        style={{
          fontFamily: 'Satoshi Bold',
        }}>
        Paragraph Large
      </Text>
      <Text preset="paragraphSmall">Paragraph Small</Text>
      <Text preset="paragraphCaption">Paragraph Caption</Text>
    </SafeAreaView>
  );
}

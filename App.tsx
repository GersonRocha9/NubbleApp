import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App() {
  return (
    <SafeAreaView>
      <Text variant="headingLarge">Heading Large</Text>
      <Text variant="headingMedium" italic>
        Heading Italic Medium
      </Text>
      <Text variant="paragraphLarge">Paragraph Large</Text>
      <Text variant="paragraphSmall">Paragraph Small</Text>
      <Text variant="paragraphCaption">Paragraph Caption</Text>
    </SafeAreaView>
  );
}

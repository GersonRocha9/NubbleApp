import {IconProps} from '../components/Icon/Icon';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    icon: Pick<IconProps, 'name' | 'color'>;
    title: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

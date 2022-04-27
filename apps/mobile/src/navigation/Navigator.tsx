import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabStack} from './TabStack';

export type RootStackParamList = {
  HomeScreen: undefined;
  RandomScreen: undefined;
  SearchScreen: undefined;
  MapScreen: undefined;
  TabStack: undefined;
};

export const Navigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};

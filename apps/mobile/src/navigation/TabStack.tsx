import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {RandomScreen} from '../screens/RandomScreen';
import React from 'react';
import {SvgBeerRN} from '../assets/svg/SvgBeerRN';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <SvgBeerRN color={focused ? 'red' : 'blue'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={RandomScreen}
        options={{
          tabBarLabel: 'Random beer',
          tabBarIcon: ({focused}) => (
            <SvgBeerRN color={focused ? 'red' : 'blue'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

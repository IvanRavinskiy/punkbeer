import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import React from 'react';

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
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({focused}) => (
        //     <SvgProfile
        //       color={focused ? 'red' : 'blue'}
        //       viewBox={'0 0 50 50'}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        // options={{
        //   tabBarLabel: 'Notes',
        //   tabBarIcon: ({focused}) => (
        //     <SvgProfile
        //       color={focused ? 'red' : 'blue'}
        //       viewBox={'0 0 50 50'}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

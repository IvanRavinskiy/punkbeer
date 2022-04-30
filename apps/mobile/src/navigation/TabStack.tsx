import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { RandomScreen } from "../screens/RandomScreen";
import React from "react";
import { SvgBeerRN } from "../assets/svg/SvgBeerRN";
import { SearchScreen } from "../screens/SearchScreen";
import { CitiesScreen } from "../screens/CitiesScreen";

const Tab = createBottomTabNavigator();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Cities"
        component={CitiesScreen}
        options={{
          tabBarLabel: "Cities",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search beer",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name="Random"
        component={RandomScreen}
        options={{
          tabBarLabel: "Random beer",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

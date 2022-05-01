import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens/HomeScreen";
import { RandomScreen } from "../../screens/RandomBeerScreen";
import React from "react";
import { SvgBeerRN } from "../../assets/svg/SvgBeerRN";
import { SearchScreen } from "../../screens/SearchScreen";
import { CitiesScreen } from "../../screens/CitiesScreen";
import type { TabNavigationParamList } from "./types";
import { ScreenKey } from "../../enums";

const Tab = createBottomTabNavigator<TabNavigationParamList>();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ScreenKey.CitiesScreen}
        component={CitiesScreen}
        options={{
          tabBarLabel: "Cities",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.SearchBeerScreen}
        component={SearchScreen}
        options={{
          tabBarLabel: "Search beer",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <SvgBeerRN color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenKey.RandomBeerScreen}
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

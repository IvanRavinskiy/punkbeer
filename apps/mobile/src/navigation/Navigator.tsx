import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabStack } from "./TabStack";
import { MapContainer } from "../screens/MapContainer";

export type RootStackParamList = {
  HomeScreen: undefined;
  RandomScreen: undefined;
  SearchScreen: undefined;
  MapScreen: undefined;
  TabStack: undefined;
  MapContainer: {
    city: string;
    lat: number;
    lgt: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="MapContainer" component={MapContainer} />
    </Stack.Navigator>
  );
};

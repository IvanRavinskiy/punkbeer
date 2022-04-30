import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { MapContainer } from "../../screens/MapContainer";
import { TabStack } from "../TabStack";

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

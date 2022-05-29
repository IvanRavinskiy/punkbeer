import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { MapContainer } from "../../screens/MapContainer";
import { TabStack } from "../TabStack";
import { ScreenKey } from "../../enums";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ScreenKey.TabStack} component={TabStack} />
      <Stack.Screen name={ScreenKey.MapContainer} component={MapContainer} />
    </Stack.Navigator>
  );
};

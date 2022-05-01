import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./navigation/StackNavigator";

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./src/navigation/StackNavigator";

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

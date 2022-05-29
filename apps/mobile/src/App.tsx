import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./navigation/StackNavigator";
import { createGlobalStore, ReduxProvider } from "@iwann/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

const { store } = createGlobalStore(AsyncStorage);
export const AppComp = () => {
  return <ReduxProvider App={App} store={store} />;
};

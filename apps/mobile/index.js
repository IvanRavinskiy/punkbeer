import { createGlobalStore, ReduxProvider } from "@iwann/store";
import { AppRegistry } from "react-native";

import { App } from "./src/App";
import { name as appName } from "./app.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { store } = createGlobalStore(AsyncStorage);

AppRegistry.registerComponent(appName, () => ReduxProvider(App, store));

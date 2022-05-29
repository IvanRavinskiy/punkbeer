import { AppRegistry } from "react-native";

import { AppComp } from "./src/App";
import { name as appName } from "./app.json";
import React from "react";

AppRegistry.registerComponent(appName, () => AppComp);

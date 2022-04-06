/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ProvideredStore} from "@iwann/store/src/provideredStore";
import React from 'react';

const RNRedux = () => (
    <ProvideredStore>
        <App />
    </ProvideredStore>
)

AppRegistry.registerComponent(appName, () => RNRedux);

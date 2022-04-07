/**
 * @format
 */

import React from 'react';

import {AppRegistry} from 'react-native';

import {ReduxProvider, store} from '@iwann/store';

import {App} from './App';
import {name as appName} from './app.json';

window.React2 = React;
console.log('### is the same react?', window.React1 === window.React2);

AppRegistry.registerComponent(appName, () => ReduxProvider(App, store));

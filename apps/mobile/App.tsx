import React from 'react';
import {Text, View} from 'react-native';
import {greeting} from '@iwann/greeting';
import Config from "react-native-config";

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LALALALALA</Text>
      <Text>{`${Config.REACT_APP_BASE_URL}`}</Text>
      <Text>{greeting()}</Text>
    </View>
  );
};

export default App;

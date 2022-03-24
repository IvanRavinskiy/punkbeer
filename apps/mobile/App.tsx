import React from 'react';
import {Text, View} from 'react-native';
import {greeting} from '@iwann/greeting';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LALALALALA</Text>
      <Text>{greeting()}</Text>
    </View>
  );
};

export default App;

import React from 'react';

import {Button, Text, View} from 'react-native';

import Config from 'react-native-config';

import {
  AppRootStateType,
  decrease,
  increase,
  useAppDispatch,
  useAppSelector,
} from '@iwann/store';
import {greeting} from '@iwann/greeting';

export const App = () => {
  const value = useAppSelector((state: AppRootStateType) => state.app.value);
  const dispatch = useAppDispatch();

  const onIncreasePress = () => {
    dispatch(increase(value));
  };
  const onDecreasePress = () => {
    dispatch(decrease(value));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>value: {value}</Text>
      <Button title={'increase'} onPress={onIncreasePress}>
        {'+'}
      </Button>
      <Button title={'decrease'} onPress={onDecreasePress}>
        {'-'}
      </Button>
      <Text>{'LALALALALA'}</Text>
      <Text>{`${Config.REACT_APP_BASE_URL}`}</Text>
      <Text>{greeting()}</Text>
    </View>
  );
};

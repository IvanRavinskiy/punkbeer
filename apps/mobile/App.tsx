import React from 'react';

import {Button, Image, Text, View} from 'react-native';

import Config from 'react-native-config';

import {
  AppRootStateType,
  decrease,
  getBeerFetch,
  increase,
  useAppDispatch,
  useAppSelector,
} from '@iwann/store';
import {BeerType} from '@iwann/api';

export const App = () => {
  const {REACT_APP_BASE_URL} = Config;
  const beers = useAppSelector((state: AppRootStateType) => state.app.beers);
  const value = useAppSelector((state: AppRootStateType) => state.app.value);
  const dispatch = useAppDispatch();
  const onGetBeerHandler = () => {
    dispatch(getBeerFetch());
  };
  const onIncreasePress = () => {
    dispatch(increase(value));
  };
  const onDecreasePress = () => {
    dispatch(decrease(value));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {beers.map((beer: BeerType) => {
        return (
          <View key={beer.id}>
            <Image
              style={{width: 150, height: 350}}
              source={{uri: `${beer.image_url}`}}
            />
            <Text>Beer title: {beer.name}</Text>
          </View>
        );
      })}
      <Button title={'get beer!!!!'} onPress={() => onGetBeerHandler()} />
      <Text>value: {value}</Text>
      <Button title="increase" onPress={onIncreasePress} />
      <Button title="decrease" onPress={onDecreasePress} />
      <Text>{`${REACT_APP_BASE_URL}`}</Text>
    </View>
  );
};

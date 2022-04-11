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
import {greeting} from '@iwann/greeting';
import {BeerType} from '@iwann/api';

export const App = () => {
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
            console.log(beer.image_url)
            return (
                <View>
                    <Image style={{width: 150, height: 350}} source={{uri: `${beer.image_url}`}} />
                    <Text>Beer title: {beer.name}</Text>
                </View>
            );
        })}
      <Button title={'get beer!!!!'} onPress={onGetBeerHandler}>
        {'get beer'}
      </Button>
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

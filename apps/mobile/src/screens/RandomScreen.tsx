import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {
  AppRootStateType,
  getBeerFetch,
  useAppDispatch,
  useAppSelector,
} from '@iwann/store';
import {BeerType} from '@iwann/api';

export const RandomScreen = () => {
  const currentBeer = useAppSelector(
    (state: AppRootStateType) => state.app.beerRandom,
  );
  const dispatch = useAppDispatch();

  const onGetBeerHandler = () => {
    dispatch(getBeerFetch());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {currentBeer.map((beer: BeerType) => {
        return (
          <View key={beer.id}>
            <Image
              style={{width: 150, height: 600}}
              source={{uri: `${beer.image_url}`}}
            />
            <Text>Beer title: {beer.name}</Text>
          </View>
        );
      })}
      <Button title={'get beer!!!!'} onPress={() => onGetBeerHandler()} />
    </View>
  );
};

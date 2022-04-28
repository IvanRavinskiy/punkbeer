import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {
  AppRootStateType,
  getBeerFetch,
  useAppDispatch,
  useAppSelector,
} from '@iwann/store';
import {BeerType} from '@iwann/api';

export const RandomScreen = () => {
  const currentRandomBeer = useAppSelector(
    (state: AppRootStateType) => state.app.beerRandom,
  );
  const dispatch = useAppDispatch();

  const onGetBeerHandler = () => {
    dispatch(getBeerFetch());
  };

  return (
    <View style={styles.container}>
      {currentRandomBeer.map(({id, image_url, name}: BeerType) => {
        return (
          <View key={id}>
            <Image
              style={{width: 150, height: 600}}
              source={{uri: `${image_url}`}}
            />
            <Text>Beer title: {name}</Text>
          </View>
        );
      })}
      <Button title={'get beer!!!!'} onPress={() => onGetBeerHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

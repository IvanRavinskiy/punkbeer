import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  AppRootStateType,
  getBeersSortFetch,
  useAppDispatch,
  useAppSelector,
} from '@iwann/store';
import {BeerType} from '@iwann/api';

export const SearchScreen = () => {
  const sortedBeers = useAppSelector(
    (state: AppRootStateType) => state.app.beersSort,
  );
  const dispatch = useAppDispatch();
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100]);
  useEffect(() => {
    dispatch(getBeersSortFetch(multiSliderValue));
  }, [dispatch]);
  const ABVChange = (values: number[]) => setMultiSliderValue(values);
  const ABVDispatchToState = (values: number[]) => {
    dispatch(getBeersSortFetch(values));
  };

  return (
    <View style={styles.SliderContainer}>
      <Text>Alcohol volume</Text>
      <View style={styles.SliderValues}>
        <Text>{multiSliderValue[0]} </Text>
        <Text>{multiSliderValue[1]}</Text>
      </View>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        onValuesChange={ABVChange}
        onValuesChangeFinish={ABVDispatchToState}
        min={0}
        max={100}
        step={1}
        allowOverlap={false}
        minMarkerOverlapDistance={10}
        sliderLength={350}
        selectedStyle={{
          backgroundColor: '#0095ff',
        }}
        trackStyle={{
          backgroundColor: '#ababab',
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
      />
      <ScrollView>
        {sortedBeers.map((beer: BeerType) => {
          return (
            <View key={beer.id}>
              <Text>{beer.name}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: `${beer.image_url}`,
                }}
              />
              <Text>ALCOHOL: {beer.abv} °</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SliderContainer: {
    padding: 20,
  },
  SliderValues: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  image: {
    width: 21,
    height: 80,
  },
});

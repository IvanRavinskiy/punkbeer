import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {
  getBeersSortFetch,
  SelectBeerSort,
  useAppDispatch,
  useAppSelector,
} from "@iwann/store";
import type { BeerType } from "@iwann/api";
import {
  PRIMAL_COLOR,
  SECOND_COLOR,
} from "../../assets/color/multisliderColor";
import { SearchBeerScreenStyles } from "./styles";

export const SearchScreen = () => {
  const sortedBeers = useAppSelector(SelectBeerSort);
  const dispatch = useAppDispatch();
  const ABVDispatchToState = (values: number[]) => {
    dispatch(getBeersSortFetch(values));
  };

  const [multiSliderValue, setMultiSliderValue] = useState([0, 100]);
  const ABVChange = (values: number[]) => setMultiSliderValue(values);

  useEffect(() => {
    dispatch(getBeersSortFetch(multiSliderValue));
  }, [dispatch]);

  return (
    <View style={SearchBeerScreenStyles.SliderContainer}>
      <Text>{"Alcohol volume"}</Text>
      <View style={SearchBeerScreenStyles.SliderValues}>
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
          backgroundColor: PRIMAL_COLOR,
        }}
        trackStyle={{
          backgroundColor: SECOND_COLOR,
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
      />
      <ScrollView>
        {sortedBeers.map((sortedBeer: BeerType) => {
          const { id, name, image_url, abv } = sortedBeer;
          return (
            <View key={id}>
              <Text>{name}</Text>
              <Image
                style={SearchBeerScreenStyles.image}
                source={{
                  uri: `${image_url}`,
                }}
              />
              <Text>{`ALCOHOL: ${abv} °`}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

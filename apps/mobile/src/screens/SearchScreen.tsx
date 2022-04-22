import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export const SearchScreen = () => {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100]);

  const multiSliderValuesChange = (values: number[]) =>
    setMultiSliderValue(values);

  return (
    <View style={styles.SliderContainer}>
      <View>
        <Text>{multiSliderValue[0]} </Text>
        <Text>{multiSliderValue[1]}</Text>
      </View>
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        onValuesChange={multiSliderValuesChange}
        min={0}
        max={100}
        allowOverlap={false}
        minMarkerOverlapDistance={10}
      />
      <ScrollView>
        <Text>BEER</Text>
        <Text>BEER</Text>
        <Text>BEER</Text>
        <Text>BEER</Text>
        <Text>BEER</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SliderContainer: {
    paddingLeft: 20,
  },
});

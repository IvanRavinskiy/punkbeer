import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const SearchScreen = () => {
  return (
    <View style={styles.SliderContainer}>
      <TouchableOpacity>
        <Text>SLIDER</Text>
      </TouchableOpacity>
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
  SliderContainer: {},
});

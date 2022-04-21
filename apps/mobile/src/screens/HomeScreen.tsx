import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {SvgBeerRN} from '../assets/svg/SvgBeerRN';
import {BeerPost} from '../components/BeerPost';

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.TopContainer}>
        <TouchableOpacity>
          <Text>PUNK BEER</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgBeerRN color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <BeerPost />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  TopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginHorizontal: 20,
  },
});

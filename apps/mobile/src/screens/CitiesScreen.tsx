import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigator';

export const CitiesScreen = () => {
  type Props = StackNavigationProp<RootStackParamList>; // what is 2 param????
  const navigation = useNavigation<Props>();
  return (
    <View>
      <Text>Select city</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MapContainer', {
            city: 'Minsk',
            lat: 53.893009,
            lgt: 27.567444,
          })
        }>
        <Text>Minsk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MapContainer', {
            city: 'Soligorsk',
            lat: 52.789947,
            lgt: 27.535962,
          })
        }>
        <Text>Soligorsk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MapContainer', {
            city: 'Kiev',
            lat: 50.450001,
            lgt: 30.523333,
          })
        }>
        <Text>Kiev</Text>
      </TouchableOpacity>
    </View>
  );
};

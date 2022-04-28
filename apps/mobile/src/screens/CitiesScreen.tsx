import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigator';

const coordinates = [
  {
    city: 'Minsk',
    lat: 53.893009,
    lgt: 27.567444,
  },
  {
    city: 'Soligorsk',
    lat: 52.789947,
    lgt: 27.535962,
  },
  {
    city: 'Kiev',
    lat: 50.450001,
    lgt: 30.523333,
  },
];

export const CitiesScreen = () => {
  type Props = StackNavigationProp<RootStackParamList>; // what is 2 param????
  const navigation = useNavigation<Props>();

  const foo = ({city, lat, lgt}: any) => {
    navigation.navigate('MapContainer', {city, lat, lgt});
  };

  return (
    <View>
      <Text>Select city</Text>
      {coordinates.map(({city, lat, lgt}, i) => {
        const qwe = () => foo({city, lat, lgt});
        return (
          <TouchableOpacity key={i} onPress={qwe}>
            <Text>{city}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

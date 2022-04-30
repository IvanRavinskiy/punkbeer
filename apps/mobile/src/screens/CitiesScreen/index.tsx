import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenKey } from "../../enums";
import type { Props } from "./types";
import { cityLocations } from "../../data/cityLocations";
import { CityLocationType } from "../../data/cityLocations/types";

export const CitiesScreen = () => {
  const navigation = useNavigation<Props>();

  const foo = (cityLocation: CityLocationType) => {
    const { city, lat, lgt } = cityLocation;
    navigation.navigate(ScreenKey.MapContainer, { city, lat, lgt });
  };

  return (
    <View>
      <Text>{"Select city"}</Text>
      {cityLocations.map(({ id, city, lat, lgt }) => {
        const qwe = () => foo({ id, city, lat, lgt });
        return (
          <TouchableOpacity key={id} onPress={qwe}>
            <Text>{city}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

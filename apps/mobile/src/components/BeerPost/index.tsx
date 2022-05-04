import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { beerPostStyles } from "./styles";
import type { BeerPostProps } from "./types";

export const BeerPost: FC<BeerPostProps> = (beer) => {
  const { id, name, image_url, description } = beer;
  return (
    <View key={id}>
      <Text>{name}</Text>
      <Image
        style={beerPostStyles.image}
        source={{
          uri: `${image_url}`,
        }}
      />
      <Text>
        {"Description: "} {description}
      </Text>
    </View>
  );
};

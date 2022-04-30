import {
  getBeerAllFetch,
  SelectBeers,
  useAppDispatch,
  useAppSelector,
} from "@iwann/store";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { BeerType } from "@iwann/api";
import { beerPostStyles } from "./styles";

export const BeerPost = () => {
  const beers = useAppSelector(SelectBeers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBeerAllFetch());
  }, [dispatch]);

  return beers.map((beerItem: BeerType) => {
    const { id, name, image_url, description } = beerItem;
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
  });
};

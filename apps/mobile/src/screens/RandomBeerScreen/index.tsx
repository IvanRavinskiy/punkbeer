import React from "react";
import { Button, Image, Text, View } from "react-native";
import {
  getBeerFetch,
  SelectRandomBeer,
  useAppDispatch,
  useAppSelector,
} from "@iwann/store";
import type { BeerType } from "@iwann/api";
import { RandomBeerScreenStyles } from "./styles";

export const RandomScreen = () => {
  const currentRandomBeer = useAppSelector(SelectRandomBeer);
  const dispatch = useAppDispatch();

  const onGetBeerHandler = () => {
    dispatch(getBeerFetch());
  };

  return (
    <View style={RandomBeerScreenStyles.container}>
      {currentRandomBeer.map(({ id, image_url, name }: BeerType) => {
        return (
          <View key={id}>
            <Image
              style={RandomBeerScreenStyles.imageContainer}
              source={{ uri: `${image_url}` }}
            />
            <Text>{`Beer title: ${name}`}</Text>
          </View>
        );
      })}
      <Button title={"get beer!!!!"} onPress={onGetBeerHandler} />
    </View>
  );
};

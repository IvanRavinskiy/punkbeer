import {
  AppRootStateType,
  getBeerAllFetch,
  useAppDispatch,
  useAppSelector,
} from "@iwann/store";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BeerType } from "@iwann/api";

export const BeerPost = () => {
  const beers = useAppSelector((state: AppRootStateType) => state.app.beers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBeerAllFetch());
  }, [dispatch]);

  return (
    <>
      {beers.map((beer: BeerType) => {
        return (
          <View key={beer.id}>
            <Text>{beer.name}</Text>
            <Image
              style={styles.image}
              source={{
                uri: `${beer.image_url}`,
              }}
            />
            <Text>Description: {beer.description}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 135,
    height: 400,
  },
});

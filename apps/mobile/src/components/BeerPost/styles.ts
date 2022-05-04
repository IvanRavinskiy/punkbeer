import { ImageStyle, StyleSheet } from "react-native";

export type BeerPostStyles = {
  image: ImageStyle;
};

export const beerPostStyles = StyleSheet.create<BeerPostStyles>({
  image: {
    width: 135,
    height: 400,
  },
});

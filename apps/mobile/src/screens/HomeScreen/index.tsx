import { BeerType } from "@iwann/api";
import {
  getBeerAllFetch,
  SelectBeers,
  useAppDispatch,
  useAppSelector,
} from "@iwann/store";
import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SvgBeerRN } from "../../assets/svg/SvgBeerRN";
import { BeerPost } from "../../components/BeerPost";
import { stylesHomeScreen } from "./styles";

export const HomeScreen = () => {
  const beers = useAppSelector(SelectBeers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBeerAllFetch());
  }, [dispatch]);
  return (
    <>
      <View style={stylesHomeScreen.TopContainer}>
        <TouchableOpacity>
          <Text>{"PUNK BEER"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgBeerRN color={"black"} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {beers.map((beerItem: BeerType) => {
          const { id, name, image_url, description } = beerItem;
          return (
            <BeerPost
              id={id}
              name={name}
              description={description}
              image_url={image_url}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

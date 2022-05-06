import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MapScreen } from "../MapScreen";
import { useNavigation } from "@react-navigation/native";
import { SvgBeerRN } from "../../assets/svg/SvgBeerRN";
import type { MapContainerNavigationProps, RouteProps } from "./types";
import { MapContainerStyles } from "./styles";
import { ContainerAnimated } from "../../components/ContainerAnimated";

export const MapContainer = ({ route }: RouteProps) => {
  const { city, lat, lgt } = route.params;
  const navigation = useNavigation<MapContainerNavigationProps>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={MapContainerStyles.svgContainer}>
          <SvgBeerRN />
        </View>
      </TouchableOpacity>
      <ContainerAnimated>
        <Text style={MapContainerStyles.cityTitleContainer}>{city}</Text>
        <View style={MapContainerStyles.mapContainer}>
          <MapScreen lat={lat} lgt={lgt} />
        </View>
      </ContainerAnimated>
    </View>
  );
};

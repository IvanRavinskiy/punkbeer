import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapScreenStyles } from "./styles";
import type { MapPropsType } from "./types";
import {
  mapsMiamiRegion,
  mapsRegionInitData,
} from "../../assets/magicNumber/mapsRegionInitData";

export const MapScreen = ({
  lat = mapsMiamiRegion.lat,
  lgt = mapsMiamiRegion.lgt,
}: MapPropsType) => {
  return (
    <SafeAreaView style={MapScreenStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsCompass={true}
        rotateEnabled={true}
        showsUserLocation={true}
        style={MapScreenStyles.map}
        initialRegion={{
          latitude: lat,
          longitude: lgt,
          latitudeDelta: mapsRegionInitData.latDelta,
          longitudeDelta: mapsRegionInitData.lgtDelta,
        }}
      />
    </SafeAreaView>
  );
};

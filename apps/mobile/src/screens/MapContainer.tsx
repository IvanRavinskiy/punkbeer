import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MapScreen } from "./MapScreen";
import { RootStackParamList } from "../navigation/Navigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SvgBeerRN } from "../assets/svg/SvgBeerRN";

type Props = NativeStackScreenProps<RootStackParamList, "MapContainer">;

export const MapContainer = ({ route }: Props) => {
  const { city, lat, lgt } = route.params;
  type Props = StackNavigationProp<RootStackParamList>;

  const navigation = useNavigation<Props>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={{ height: 20, width: 20 }}>
          <SvgBeerRN />
        </View>
      </TouchableOpacity>
      <Text style={{ paddingTop: 10 }}>{city}</Text>
      <View style={{ height: "100%", width: "100%" }}>
        <MapScreen lat={lat} lgt={lgt} />
      </View>
    </View>
  );
};

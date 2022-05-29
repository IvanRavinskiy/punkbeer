import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator/types";
import { StackNavigationProp } from "@react-navigation/stack";

export type RouteProps = NativeStackScreenProps<
  RootStackParamList,
  "MapContainer"
>;
export type MapContainerNavigationProps =
  StackNavigationProp<RootStackParamList>;

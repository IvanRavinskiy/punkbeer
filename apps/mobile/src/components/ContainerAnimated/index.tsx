import * as React from "react";
import { FC, useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { ContainerAnimatedProps } from "./types";

export const ContainerAnimated: FC<ContainerAnimatedProps> = (props) => {
  const { children } = props;
  const valueAnimate = useRef(new Animated.Value(1)).current;
  const startAnimate = () => {
    Animated.timing(valueAnimate, {
      toValue: 0,
      useNativeDriver: true,
      duration: 10000,
    }).start();
  };
  useEffect(() => {
    startAnimate();
  }, []);

  const translateX = valueAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400],
  });
  const rotate = valueAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateX }, { rotate }],
        justifyContent: "center",
      }}
    >
      {children}
    </Animated.View>
  );
};

import * as React from "react";
import { FC, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { ContainerAnimatedProps } from "./types";
import { ContainerAnimatedStyles } from "./styles";

export const ContainerAnimated: FC<ContainerAnimatedProps> = (props) => {
  const { children } = props;
  const valueAnimate = useRef(new Animated.Value(1)).current;
  const startAnimate = () => {
    Animated.timing(valueAnimate, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
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
      style={
        ContainerAnimatedStyles.container && {
          transform: [{ translateX }, { rotate }],
        }
      }
    >
      {children}
    </Animated.View>
  );
};

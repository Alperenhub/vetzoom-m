import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Animated } from "react-native";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View className=" flex-row h-10 -mb-10">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i.toString()}
            style={{ opacity }}
            className="h-2 w-2 rounded-full bg-white z-10 mx-2"
          />
        );
      })}
    </View>
  );
};

export default Paginator;
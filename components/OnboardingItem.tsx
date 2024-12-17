import { View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";

interface OnboardingItemProps {
  item: object;
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      className="flex-1 justify-between items-center px-7 "
      style={{ width }}
    >
      <Text className="text-[26px] leading-[35px]  text-white  text-center font-bold mt-10">
        {item.description}
      </Text>
      <View className=" items-center mb-10">
        <Image
          source={item.images[0]}
          className={`${
            item.id == "1"
              ? "w-[280px]"
              : item.id == "2"
              ? "w-[220px]"
              : "w-[220px]"
          }`}
          resizeMode="contain"
        />
        <Image
          source={item.images[1]}
          className={`${
            item.id == "1"
              ? " w-[280px] -mt-[70] -z-10"
              : item.id == "2"
              ? " w-[250px] -mt-[70] -z-10"
              : " w-[250px] -mt-[65] -z-10"
          }`}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default OnboardingItem;

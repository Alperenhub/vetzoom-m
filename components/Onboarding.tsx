import { View, Text, FlatList, Image, Animated } from "react-native";
import React, { useRef, useState } from "react";
import slides from "../constants/slides.js";
import OnboardingItem from "./OnboardingItem";

import { landingLogo } from "../constants/images.js";
import Paginator from "./Paginator";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View className=" items-center justify-between py-10">
      <Image source={landingLogo} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        pagingEnabled
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;

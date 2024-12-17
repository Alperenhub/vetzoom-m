import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { cat, landingLogo } from "../constants/images";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="h-full  bg-[#1B998B]">
        <LinearGradient
          colors={["#1B998B", "#65BF7E", "#1B998B"]}
          locations={[1, 0.65, 0.2]}
          className="flex-1 justify-center items-center"
        >
          <SafeAreaView className=" items-center justify-between ">
            <Image source={landingLogo} resizeMode="contain" />
            <Image source={cat} className="w-[200px] " resizeMode="contain" />
          </SafeAreaView>
        </LinearGradient>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

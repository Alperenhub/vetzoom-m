import React from "react";
import { Tabs } from "expo-router";
import { View, Image, Text, ImageSourcePropType } from "react-native";
import { home, notification, cart, profile } from "../../constants/icons";

interface TabIconProps {
  icon: ImageSourcePropType; // Image kaynağı için doğru tip
  name: string; // İsim, bir string olmalı
  color: string; // Renk, bir string olmalı
  focused: boolean; // Odaklanma durumu, boolean olmalı
}

const TabIcon: React.FC<TabIconProps> = ({ icon, name, color, focused }) => {
  return (
    <View className=" items-center pt-4">
      <Image
        tintColor={color}
        source={icon}
        resizeMode="contain"
        className=" w-6 h-6 "
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1B998B",
          tabBarInactiveTintColor: "#979797",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Home"
                  icon={home}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "Notification",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Notification"
                  icon={notification}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Cart"
                  icon={cart}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  name="Profile"
                  icon={profile}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import App from "./index";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import tw from "twrnc";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const [fontLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#9B9BFF" }}>
      <Tab.Screen
        name="index"
        component={App}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#000",
          },
          tabBarStyle: {
            backgroundColor: "#000",
          },
          headerTitle: () => (
            <View style={tw.style("px-8")}>
              <Text
                style={{
                  color: "#9B9BFF", // Header title color
                  fontFamily: "Alata_400Regular", // Custom font
                  fontSize: 24, // Font size
                }}
              >
                Welcome to buklab
              </Text>
            </View>
          ),
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-quote-close-outline"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

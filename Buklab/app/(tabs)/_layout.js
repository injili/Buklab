import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import App from "./index";
import Clubs from "./clubs";
import Post from "./post";
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
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#FFF" }}>
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
            borderTopWidth: 0,
          },
          headerTitle: () => (
            <View style={tw.style("")}>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Alata_400Regular",
                  fontSize: 30,
                }}
              >
                @ injili
              </Text>
            </View>
          ),
          tabBarInactiveTintColor: "#9B9BFF",
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
      <Tab.Screen
        name="clubs"
        component={Clubs}
        options={{
          title: "Clubs",
          headerStyle: {
            backgroundColor: "#000",
          },
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 0,
          },
          headerTitle: () => (
            <View style={tw.style("")}>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Alata_400Regular",
                  fontSize: 24,
                }}
              >
                Book Clubs
              </Text>
            </View>
          ),
          tabBarInactiveTintColor: "#9B9BFF",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-group" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={Post}
        options={{
          title: "Publish Post",
          headerStyle: {
            backgroundColor: "#000",
          },
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 0,
          },
          headerTitle: () => (
            <View style={tw.style("")}>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Alata_400Regular",
                  fontSize: 24,
                }}
              >
                Publish Log
              </Text>
            </View>
          ),
          tabBarInactiveTintColor: "#9B9BFF",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus" size={21} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

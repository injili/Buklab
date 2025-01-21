import { Pressable, StyleSheet, Alert, View, Text } from "react-native";
import Colors from "../../utilities/color";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";
import tw from "twrnc";

export default function Clubs() {
  const data = [
    {
      id: 1,
      name: "Buklab",
      notification: true,
      read: true,
      meet: true,
    },
    {
      id: 2,
      name: "Name Cannot Be Blank",
      notification: false,
      read: true,
      meet: false,
    },
    {
      id: 3,
      name: "Kiboko",
      notification: false,
      read: true,
      meet: true,
    },
  ];

  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.theTiles}>
          {data.map((item, index) => (
            <View key={index} style={styles.aTile}>
              <Text style={styles.theTitle}>{item.name}</Text>
              <View style={styles.feat}>
                {item.notification && (
                  <Ionicons name="notifications" size={17} color="white" />
                )}
                {item.read && (
                  <FontAwesome6 name="book-bookmark" size={16} color="white" />
                )}
                {item.meet && (
                  <FontAwesome5 name="map-marked-alt" size={16} color="white" />
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    ...tw.style("bg-black flex-1 items-center justify center"),
  },
  theTitle: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-white text-left text-2xl"),
  },
  container: {
    ...tw.style("flex-1 justify-center items-center min-h-screen"),
  },
  theTiles: {
    ...tw.style("flex flex-wrap flex-row justify-between p-4"),
  },
  aTile: {
    backgroundColor: Colors.my_lilac,
    ...tw.style(
      "rounded-md aspect-square h-full w-[47.5%] p-6 mb-6 flex flex-col justify-between"
    ),
  },
  feat: {
    ...tw.style("flex-row gap-2"),
  },
});

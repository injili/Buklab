import {
  Pressable,
  TextInput,
  StyleSheet,
  Alert,
  View,
  Text,
} from "react-native";
import Colors from "../../utilities/color";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

import React, { useState } from "react";
import tw from "twrnc";

export default function Post() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [log, setLog] = useState("");

  const handleSubmit = () => {
    if (!name || !author || !log) {
      Alert.alert("Error", "Please fill in the name");
      return;
    } else {
      Alert.alert("Form Submitted", `Name: ${name}\nAuthor: ${author}`);
      setName("");
      setAuthor("");
      setLog("");
    }
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.theTiles}>
          <View style={styles.aTile}>
            <Text style={styles.theTitle}>Today's Log</Text>
            <TextInput
              style={styles.theInput}
              placeholder="Name of The Book"
              placeholderTextColor="#fff"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.theInput}
              placeholder="Name of Author"
              placeholderTextColor="#fff"
              value={author}
              onChangeText={setAuthor}
            />
            <TextInput
              style={styles.theLogging}
              placeholder="Log"
              placeholderTextColor="#fff"
              value={log}
              onChangeText={setLog}
            />
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Publish Log</Text>
            </Pressable>
          </View>
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
    ...tw.style("text-white text-right text-2xl"),
  },
  container: {
    ...tw.style("flex-1 justify-center items-center min-h-screen"),
  },
  theTiles: {
    ...tw.style("flex flex-wrap flex-row justify-between p-4"),
  },
  aTile: {
    backgroundColor: Colors.my_lilac,
    ...tw.style("rounded-md w-full p-6 mb-6 flex flex-col justify-center"),
  },
  feat: {
    ...tw.style("flex-row gap-2"),
  },
  theLogging: {
    ...tw.style("border h-32 text-white border-white rounded-md my-2 px-2", {
      textAlignVertical: "top",
    }),
  },
  theInput: {
    ...tw.style("border text-white border-white rounded-md my-2 px-2"),
  },
  button: {
    ...tw.style("bg-black px-12 py-1 rounded-md mt-2"),
  },
  buttonPressed: {
    backgroundColor: Colors.my_lilac,
    ...tw.style("bg-lilac-400 px-12 py-1"),
  },
  buttonText: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-center text-white text-lg"),
  },
});

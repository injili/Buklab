import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import { Link } from "expo-router";
import tw from "twrnc";

export default function App() {
  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 items-center justify-center h-screen bg-black`}>
      <Text style={styles.text}>We now route</Text>
      <Link href="/detail" asChild>
        <Pressable>
          <Text style={tw`text-white`}>Navigate to detail</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-indigo-400"),
  },
});

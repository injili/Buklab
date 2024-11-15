import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center h-screen bg-black`}>
      <Text style={tw`text-white`}>Gospel Is Home Babyy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

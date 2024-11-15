import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`flex-1 items-center justify-center h-screen bg-black`}>
      <Text style={tw`text-white`}>We now route</Text>
      <Link href="/detail" asChild>
        <Pressable>
          <Text style={tw`text-white`}>Navigate to detail</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

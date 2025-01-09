import { Stack } from "expo-router/stack";
// import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
// import tw from "twrnc";
// import { Text, View } from "react-native";

export default function Layout() {
  // const [fontLoaded] = useFonts({
  //   Alata_400Regular,
  // });

  // if (!fontLoaded) {
  //   return null;
  // }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    // <Stack
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#000",
    //     },
    //     headerTintColor: "#9B9BFF",
    //     headerTitleStyle: {
    //       fontFamily: "Alata_400Regular",
    //     },
    //   }}
    // >
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       title: "Welcome to buklab",
    //       headerTitle: () => (
    //         <View style={tw.style("px-8")}>
    //           <Text
    //             style={{
    //               color: "#9B9BFF", // Header title color
    //               fontFamily: "Alata_400Regular", // Custom font
    //               fontSize: 24, // Font size
    //             }}
    //           >
    //             Welcome to buklab
    //           </Text>
    //         </View>
    //       ),
    //     }}
    //   />
    // </Stack>
  );
}

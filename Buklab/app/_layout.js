import { Stack } from "expo-router/stack";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import tw from "twrnc";

export default function Layout() {
  const [fontLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          ...tw.style("font-bold"),
          fontFamily: "Alata_400Regular",
        },
      }}
    />
  );
}

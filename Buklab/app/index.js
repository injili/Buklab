import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import { Link } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import tw from "twrnc";

export default function App() {
  // Dummy data for the carousel
  const carouselData = [
    {
      id: 1,
      content:
        "Tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.",
      date: "2024-11-22T10:00:00Z",
      stars: 4,
      uname: "deez",
      bname: "The Big Book",
      wname: "John Though",
    },
    {
      id: 2,
      content:
        "Wretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.",
      date: "2024-11-12T10:00:00Z",
      stars: 12,
      uname: "Priest",
      bname: "The Other Book",
      wname: "Johnny Still",
    },
    {
      id: 3,
      content:
        "Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor.",
      date: "2024-11-20T10:00:00Z",
      stars: 0,
      uname: "Jyune",
      bname: "For This Log",
      wname: "Fyodor",
    },
    {
      id: 4,
      content:
        "Condimentum nisi. Mauris. Morbi nisi ante, convallis in id sapien dui lacus in, tempor curis id sapien dui. Morbi nisi antursus tellus. Aenean porttitor.",
      date: "2024-11-20T10:00:00Z",
      stars: 335,
      uname: "Ethan",
      bname: "Frogs and Kings",
      wname: "Dwayne",
    },
    {
      id: 5,
      content:
        "Tempor cursus tellus. Aenean porttitor convallis iincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcun id sapien dui lacus in, tempor cursus.",
      date: "2024-11-20T10:00:00Z",
      stars: 33067,
      uname: "peeatah",
      bname: "I Am Not A Cat",
      wname: "Cat Mewton",
    },
  ];

  let [fontsLoaded] = useFonts({
    Alata_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 items-center justify-center bg-black`}>
      <Carousel
        vertical
        loop={false}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height}
        autoPlay={false}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.tile}>
            <View style={styles.tiler}>
              <Text style={styles.text}>{item.bname}</Text>
              <Text style={styles.text}>{item.wname}</Text>
              <Text style={styles.text}>{item.content}</Text>
              <Text style={styles.text}>{item.uname}</Text>
              <Text style={styles.text}>
                {new Date(item.date).toLocaleDateString()}
              </Text>
              <Text style={styles.text}>{item.stars}</Text>
            </View>
          </View>
        )}
      />
      {/* <Link href="/detail" asChild>
        <Pressable>
          <Text style={tw`text-white mt-4`}>Navigate to Detail</Text>
        </Pressable>
      </Link> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    ...tw.style("flex-1 items-center justify-center p-8"),
  },
  tiler: {
    ...tw.style("bg-indigo-400 p-8"),
  },
  text: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-center text-white"),
  },
});

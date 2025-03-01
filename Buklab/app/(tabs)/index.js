import { StatusBar } from "expo-status-bar";
import Colors from "../../utilities/color";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import Carousel from "react-native-reanimated-carousel";
import tw from "twrnc";

export default function App() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinal(day)}  ${month}, ${year}`;
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const givenDate = new Date(date);
    const diffInSeconds = Math.floor((now - givenDate) / 1000);

    if (diffInSeconds < 60) {
      return "just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} year${years > 1 ? "s" : ""} agp`;
    }
  };

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
      category: "log",
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
      category: "log",
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
      category: "log",
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
      category: "log",
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
      category: "log",
    },
    {
      id: 6,
      bname: "Himself and Ourself",
      wname: "Throthrodile",
      content:
        "Aenean porttitor convallis iincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcun id sapien dui lacus in, tempor.",
      category: "suggestion",
    },
    {
      id: 7,
      title: "Meet Reminder",
      location: "The Big Eden",
      cname: "Buklab",
      eventdate: "2025-1-20T10:00:00Z",
      date: "2024-11-20T10:00:00Z",
      category: "reminder",
    },
    {
      id: 8,
      copy: "Hard Copy",
      uname: "her.way",
      bname: "The Brothers Karamazov",
      wname: "Fyodr Himselfman",
      date: "2025-1-12T10:00:00Z",
      category: "request",
    },
  ];

  let [fontsLoaded] = useFonts({
    Alata_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`flex-1 items-center justify-center bg-black`}>
      <Carousel
        vertical
        loop={true}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height}
        autoPlay={false}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => {
          if (item.category === "log") {
            return (
              <View style={styles.tile}>
                <View style={styles.tiler}>
                  <View style={styles.head}>
                    <MaterialCommunityIcons
                      name="format-quote-close-outline"
                      size={140}
                      borderRadius={5}
                      color="white"
                    />
                    <View>
                      <Text style={styles.bname}>{item.bname}</Text>
                      <Text style={styles.wname}>{item.wname}</Text>
                    </View>
                  </View>

                  <Text style={styles.content}>{item.content}</Text>
                  <View style={styles.head}>
                    <Text style={styles.text}>@ {item.uname}</Text>
                    <View>
                      <Text style={styles.stats}>
                        {getRelativeTime(item.date)}
                      </Text>
                      <View style={styles.star}>
                        <Entypo
                          style={styles.stats}
                          name="star-outlined"
                          size={12}
                          color="white"
                        />
                        <Text style={styles.stats}>{item.stars}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          } else if (item.category === "request") {
            return (
              <View style={styles.tile}>
                <View style={styles.tiler}>
                  <View style={styles.head}>
                    <FontAwesome5
                      name="hand-holding-heart"
                      size={140}
                      color="white"
                    />
                    <View>
                      <Text style={styles.bname}>{item.bname}</Text>
                      <Text style={styles.wname}>{item.wname}</Text>
                    </View>
                  </View>

                  <Text style={styles.content}>{item.copy} book request.</Text>
                  <View style={styles.head}>
                    <Text style={styles.text}>@ {item.uname}</Text>
                    <View>
                      <Text style={styles.stats}>
                        {getRelativeTime(item.date)}
                      </Text>
                      <Pressable
                        style={({ pressed }) => [
                          styles.button,
                          pressed && styles.buttonPressed,
                        ]}
                        onPress={() => Alert.alert("Book Lent")}
                      >
                        <Text style={styles.buttonText}>Lend</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            );
          } else if (item.category === "reminder") {
            return (
              <View style={styles.tile}>
                <View style={styles.tiler}>
                  <View style={styles.head}>
                    <SimpleLineIcons
                      name="location-pin"
                      size={100}
                      color="white"
                    />
                    <View>
                      <Text style={styles.bname}>{item.title}</Text>
                      <Text style={styles.wname}>{item.cname}</Text>
                    </View>
                  </View>

                  <Text style={styles.content}>Location: {item.location}.</Text>
                  <View style={styles.head}>
                    <Text style={styles.text}>
                      Date: {formatDate(item.eventdate)}
                    </Text>
                    <View>
                      <Text style={styles.stats}>
                        {getRelativeTime(item.date)}
                      </Text>
                      <Pressable
                        style={({ pressed }) => [
                          styles.button,
                          pressed && styles.buttonPressed,
                        ]}
                        onPress={() => Alert.alert("Slot Booked")}
                      >
                        <Text style={styles.buttonText}>RSVP</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.tile}>
                <View style={styles.tiler}>
                  <View style={styles.head}>
                    <FontAwesome5 name="brain" size={140} color="white" />
                    <View>
                      <Text style={styles.bname}>{item.bname}</Text>
                      <Text style={styles.wname}>{item.wname}</Text>
                    </View>
                  </View>

                  <Text style={styles.content}>{item.content}</Text>
                  <View style={styles.head}>
                    <Text style={styles.text}>Recommendation</Text>
                    <View>
                      <View style={styles.star}>
                        <FontAwesome5 name="bookmark" size={12} color="white" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    ...tw.style("flex-1 items-center justify-center px-4 mb-24"),
  },
  tiler: {
    backgroundColor: Colors.my_lilac,
    ...tw.style("p-8 w-full rounded-md"),
  },
  head: {
    ...tw.style("flex-row justify-between items-center"),
  },
  star: {
    ...tw.style("flex-row gap-1 justify-end"),
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    ...tw.style("text-left text-white"),
  },
  bname: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-right text-black text-2xl"),
  },
  wname: {
    fontFamily: "Alata_400Regular",
    ...tw.style("text-right text-black text-sm"),
  },
  content: {
    fontFamily: "Montserrat_400Regular",
    ...tw.style("text-left text-black py-4"),
  },
  stats: {
    fontFamily: "Montserrat_400Regular",
    ...tw.style("text-right text-white text-sm mb-2"),
  },
  button: {
    ...tw.style("bg-black px-12 py-1 rounded-md"),
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

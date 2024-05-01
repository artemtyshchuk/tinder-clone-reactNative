import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";

const DATA = [
  {
    firstName: "Artem",
    lastName: "Tyshchuk",
    job: "Software Engineer",
    photoURL:
      "https://wl-adme.cf.tsp.li/resize/728x/jpg/4a2/a04/8ab3215ee78bfaa95219bddeed.jpg",
    age: 24,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    job: "Builder",
    photoURL:
      "https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg",
    age: 40,
  },
  {
    firstName: "Jeff",
    lastName: "Bezos",
    job: "Buisnessman",
    photoURL:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    age: 55,
  },
  {
    firstName: "Mark",
    lastName: "Zuckerberg",
    job: "Buisnessman",
    photoURL:
      "https://timesofindia.indiatimes.com/photo/photo/99508259/99508259.jpg?imgsize=21300",
    age: 35,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  console.log(user);

  const swipeRef = useRef(null);

  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className=" flex-row items-center justify-between px-5 ">
        <TouchableOpacity>
          <Image
            className="w-10 h-10 rounded-full"
            source={{ uri: user?.photoURL }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            className="w-12 h-12 rounded-full"
            source={require("../assets/tinderlogo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 -mt-6 ">
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          ref={swipeRef}
          cards={DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          backgroundColor={"#4FD0E9"}
          onSwipedLeft={() => console.log("swipe NOPE")}
          onSwipedRight={() => console.log("swipe LIKE")}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  textAlign: "left",
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View className="relative bg-white h-3/4 rounded-xl drop-shadow-xl">
              <Image
                className=" absolute top-0 w-full h-full rounded-xl"
                source={{ uri: card.photoURL }}
              />
              <View className="absolute bg-white bottom-0 w-full h-20 flex-row justify-between items-center px-6 py-2 rounded-b-xl">
                <View>
                  <Text className="text-xl font-bold">
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>
                <Text className="text-2xl font-bold">{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View className="flex flex-row justify-evenly">
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          className="items-center justify-center rounded-full w-16 h-16 bg-red-200"
        >
          <Entypo name="cross" size={30} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          className="items-center justify-center rounded-full w-16 h-16 bg-green-200"
        >
          <Entypo name="heart" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

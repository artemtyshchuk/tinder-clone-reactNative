import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { updateUser } = useAuth();

  const handleSignIn = () => {
    updateUser({
      name: "Artem Tys",
      email: "gg@ex.com",
      photoURL:
        "https://wl-adme.cf.tsp.li/resize/728x/jpg/4a2/a04/8ab3215ee78bfaa95219bddeed.jpg",
    });
    navigation.navigate("HomeScreen");
  };

  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity className="flex self-center absolute bottom-40 w-52 bg-white p-4 rounded-2xl">
          <Text onPress={handleSignIn} className="text-center font-semibold">
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

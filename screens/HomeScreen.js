import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <SafeAreaView>
      <View className="flex-1">
        <TouchableOpacity>
          <Image
            className="w-10 h-10 rounded-full"
            source={{ uri: user?.photoURL }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

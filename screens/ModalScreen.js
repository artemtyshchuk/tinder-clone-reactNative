import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="flex-1 items-center pt-1">
      <Image
        className="h-20 w-full"
        resizeMode="contain"
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png",
        }}
      />

      <Text className="text-gray-500 font-bold font text-xl">
        Welcome {user.name}
      </Text>

      <Text className="text-red-400 font-bold text-center p-4">
        Step 1: The Profile Pic
      </Text>
      <TextInput
        placeholder="Enter a profile Pic URL"
        value={image}
        onChange={(text) => setImage(text)}
      />

      <Text className="text-red-400 font-bold text-center p-4">
        Step 2: The Job
      </Text>
      <TextInput
        placeholder="Enter your occupation"
        value={job}
        onChange={(text) => setJob(text)}
      />

      <Text className="text-red-400 font-bold text-center p-4">
        Step 3: The Age
      </Text>
      <TextInput
        placeholder="Enter your age"
        value={age}
        onChange={(text) => setAge(text)}
      />

      <TouchableOpacity
        disabled={incompleteForm}
        className={`w-64 p-3 rounded-xl absolute bottom-10 ${
          incompleteForm ? "bg-gray-400" : "bg-red-400"
        }`}
        onPress={updateUserProfile}
      >
        <Text className="text-center text-white text-xl">Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;

import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    photoURL: null,
  });

  console.log(user);

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

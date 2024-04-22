import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import { AuthProvider } from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
  const user = true; //TODO auth component
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  // options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ChatScreen"
                  component={ChatScreen}
                  // options={{ headerShown: false }}
                />
              </>
            ) : (
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                // options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

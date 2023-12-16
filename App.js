import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import { Colors } from "./constants/styles";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SplashScreen from "./screens/SplashScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Text-Bold": require("./assets/font/SF-Pro-Text-Bold.otf"),
    "SF-Pro-Text-Heavy": require("./assets/font/SF-Pro-Text-Heavy.otf"),
    "SF-Pro-Text-Light": require("./assets/font/SF-Pro-Text-Light.otf"),
    "SF-Pro-Text-Medium": require("./assets/font/SF-Pro-Text-Medium.otf"),
    "SF-Pro-Text-Regular": require("./assets/font/SF-Pro-Text-Regular.otf"),
    "SF-Pro-Text-Semibold": require("./assets/font/SF-Pro-Text-Semibold.otf"),
  });

  // if (!fontsLoaded) {
  //   // Render some fallback UI while fonts are loading
  //   return null
  // }
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  useEffect(() => {
    if (fontsLoaded && isSplashLoading) {
      // Set a timeout if you want to display the splash screen for a fixed time
      setTimeout(() => {
        setIsSplashLoading(false);
      }, 7000); // For example, 3000ms = 3 seconds
    }
  }, [fontsLoaded, isSplashLoading]);

  if (!fontsLoaded || isSplashLoading) {
    return <SplashScreen onAnimationComplete={() => setIsSplashLoading(false)} />;
  }
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NativeBaseProvider>
        <NavigationContainer>
        <Stack.Navigator
  screenOptions={{
    contentStyle: { backgroundColor: Colors.fcfcfc },
    headerTintColor: Colors.textColor,
    headerTitleStyle: {
      fontFamily: "SF-Pro-Text-Bold",
    },
    headerTitleAlign: "center",
  }}
>
  <Stack.Screen
    name="SignUpScreen"
    component={SignUpScreen}
    options={{
      title: "Signup",
      headerStyle: { backgroundColor: Colors.fcfcfc },
    }}
  />
  <Stack.Screen
    name="LoginScreen"
    component={LoginScreen}
    options={{
      title: "Login",
      headerBackVisible: false,
    }}
  />
  <Stack.Screen
    name="HomeScreen"
    component={HomeScreen}
    options={{
      title: "Home",
    }}
  />
  <Stack.Screen
    name="DetailsScreen"
    component={DetailScreen}
    options={{
      title: "Package Details",
      headerShown: false,
    }}
  />
</Stack.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>
    </React.Fragment>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

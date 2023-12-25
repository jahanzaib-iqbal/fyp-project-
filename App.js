import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
import WelcomeScreen from "./screens/WelcomeScreen";
import HeaderLeft from "./components/button/ScreenHeaderLeft";
import CarHomeScreen from "./screens/CarHomeScreen";
import HotelHomeScreen from "./screens/HotelHomeScreen";
import FilterScreen from "./screens/FilterScreen";

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

  const [isSplashLoading, setIsSplashLoading] = useState(true);

  useEffect(() => {
    if (fontsLoaded && isSplashLoading) {
      setTimeout(() => {
        setIsSplashLoading(false);
      }, 4000); // For example, 3000ms = 3 seconds
    }
  }, [fontsLoaded, isSplashLoading]);

  if (!fontsLoaded || isSplashLoading) {
    return (
      <SplashScreen onAnimationComplete={() => setIsSplashLoading(false)} />
    );
  }
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="FilterScreen"
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.backgroundColor,
                  elevation: 0, // Removes elevation shadow on Android
                  shadowOpacity: 0, // Removes shadow on iOS // Set your desired color here
                  borderBottomWidth: 0,
                },
                headerTintColor: Colors.backgroundColor, // This changes the color of the back button and title
              }}
            >
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                  headerTitle: "",
                  headerLeft: () => <HeaderLeft />,
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  title: "",
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
              <Stack.Screen
                name="CarHomepage"
                component={CarHomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HotelHomeScreen"
                component={HotelHomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginTop: 50,
  },
});

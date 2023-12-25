import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainHeading from "../components/MainHeading";
import SubHeading from "../components/SubHeading";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.rootScreen}>
      <MainHeading text={"Welcome Back!"} />
      <SubHeading
        text={
          "Log In to your account to explore your dream place to live accross the whole world!"
        }
      />
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

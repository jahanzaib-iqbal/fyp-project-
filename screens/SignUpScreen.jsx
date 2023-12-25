import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/styles";
import MainHeading from "../components/MainHeading";
import SubHeading from "../components/SubHeading";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = () => {
  return (
    <View style={styles.rootScreen}>
      <View>
        <MainHeading text="Let's explore together!" />
        <SubHeading
          text="  Create your account to explore your dream place to live across the whole
      world!"
        />
        <SignUpForm />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/styles";

const LargeButton = ({ text }) => {
  return (
    <Pressable
      onPress={() => console.log("hello")}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#4e9994" : "#5aaea9" },
        styles.mainBtn,
      ]}
    >
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  mainBtn: {
    width: "100%",
    padding: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnText: {
    fontFamily: "SF-Pro-Text-Medium",
    color: Colors.backgroundColor,
    fontSize: 14,
  },
});

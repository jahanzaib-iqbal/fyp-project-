import React from "react";
import { View } from "react-native";
import DisplayCard from "../components/DisplayCard";
import { PLACES } from "../data/NewData"; // Ensure this is an array of objects

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <DisplayCard items={PLACES} />
    </View>
  );
};

export default HomeScreen;

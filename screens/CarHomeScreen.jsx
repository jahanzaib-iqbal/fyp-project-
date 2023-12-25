import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../constants/GlobalStyles";
import Searchbar from "../components/input/car/Searchbar";

import { LinearGradient } from "expo-linear-gradient";
import CardHeading from "../components/heading/car/CardHeading";
import RatingSection from "../components/card/RatingSection";
import CardTitle from "../components/card/CardTitle";
import FeatureSection from "../components/card/featureSection/FeatureSection";
import PriceTag from "../components/card/PriceTag";
import Favorite from "../components/card/Favorite";
import Card from "../components/card/Cards";

const CarHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar />

      <CardHeading heading="Deal Near You" subHeading={213} />

      <Card />
    </View>
  );
};

export default CarHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    alignItems: "center",
  },
});

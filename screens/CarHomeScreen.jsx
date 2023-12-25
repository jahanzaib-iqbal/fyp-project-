import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
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
import cardDataJSON from "../data/carCard.json";
const CarHomeScreen = () => {
  const [cardData, setCardData] = useState(cardDataJSON);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Searchbar placeholder="Find your perfect car..." />

        <CardHeading heading="Deal Near You" subHeading="213 Cars in lahore" />

        <Card cardData={cardData} />

        <CardHeading heading="Top Rated Cars" subHeading="213 Cars in lahore" />

        <Card cardData={cardData} />

        <CardHeading heading="Best Cars" subHeading="213 Cars in lahore" />

        <Card cardData={cardData} />
      </View>
    </ScrollView>
  );
};

export default CarHomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white", // Ensure the ScrollView background is white
  },
  contentContainer: {
    paddingBottom: 20,
    
    backgroundColor: "white", // Ensure the background behind cards is white
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    alignItems: "center",
    marginHorizontal: 15,
  },
});

import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Color } from "../constants/GlobalStyles";
import Searchbar from "../components/input/car/Searchbar";

import { LinearGradient } from "expo-linear-gradient";
import CardHeading from "../components/heading/car/CardHeading";
import RatingSection from "../components/card/RatingSection";
import CardTitle from "../components/card/CardTitle";
import FeatureSection from "../components/card/featureSection/FeatureSection";
import PriceTag from "../components/card/PriceTag";
import Favorite from "../components/card/Favorite";
import Card from "../components/card/Cards";
import hotelDataJSON from "../data/HotelData.json";
import HotelDateRoom from "../components/HotelDateRoom";

const HotelHomeScreen = () => {
  const [cardData, setCardData] = useState(hotelDataJSON);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Searchbar placeholder="Search address, city, location" />

        <HotelDateRoom />
        <CardHeading
          heading="Near your location"
          subHeading="243 Locations in lahore"
        />

        <Card cardData={cardData} />

        <CardHeading
          heading="Top Rated Hotels"
          subHeading="213 Hotels in lahore"
        />

        <Card cardData={cardData} />

        <CardHeading heading="Best Hotels" subHeading="213 Hotel in lahore" />

        <Card cardData={cardData} />
      </View>
    </ScrollView>
  );
};

export default HotelHomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white", // Ensure the ScrollView background is white
  },
  contentContainer: {
    paddingBottom: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: Color.backgroundColor,
    // alignItems: "center",
    marginHorizontal: 15,
  },
});

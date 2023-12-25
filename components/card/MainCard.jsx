import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import RatingSection from "./RatingSection";
import CardTitle from "./CardTitle";
import FeatureSection from "./featureSection/FeatureSection";
import PriceTag from "./PriceTag";
import Favorite from "./Favorite";

const MainCard = ({ cardData }) => {
  
  useEffect(() => {
    // Log the cardData to the console
    console.log("Card Data:", cardData);
  }, [cardData]);
  return (
    <View style={styles.sectionLayout}>
      <LinearGradient
        style={styles.CardGradientLayout}
        locations={[0, 1]}
        colors={["#ffff", "rgba(255, 255, 255, 0)"]}
      >
        <Pressable
          style={styles.CardPressable}
          onPress={() => {
            console.log("card clicked");
          }}
        >
          <Image
            style={styles.CardImg}
            contentFit="cover"
            source={require("../../assets/images/car-images/car.png")}
          />
          <View style={styles.rightSection}>
            <View>
              <View>
                <RatingSection rating={cardData.rating} noOfReviews={cardData.noOfReview} />
                <CardTitle title={cardData.title} city={`${cardData.city}, Pakistan`} />
              </View>
              <FeatureSection iconsData={cardData.features} />
            </View>

            <PriceTag price={cardData.price} />
            <Favorite />
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  // Styles for the Section
  sectionLayout: {
    minHeight: 200,
    marginTop: 21,
    width: 400,
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    shadowColor: "#000", // Color of the shadow
    shadowOffset: {
      width: 0, // Horizontal distance of the shadow
      height: 2, // Vertical distance of the shadow
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: "hidden",
    elevation: 1,
    // borderRadius: 7,
  },

  // Styles for the LinearGradient component
  CardGradientLayout: {
    flex: 1,
  },

  // Styles for the Pressable component
  CardPressable: {
    flex: 1,
    flexDirection: "row",
  },
  rightSection: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  // Styles for the Image components
  CardImg: {
    width: "40%",
    height: "100%",
  },
});

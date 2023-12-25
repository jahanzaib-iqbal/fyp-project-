import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../../constants/GlobalStyles";
const PriceTag = ({ price }) => {
  return (
    <Text style={styles.priceSection}>
      <Text style={styles.actualPrice}>{price} </Text>

      <Text style={styles.dayTag}>/ day</Text>
    </Text>
  );
};

export default PriceTag;

const styles = StyleSheet.create({
  //price section
  priceSection: {
    marginTop: 18,
  },

  actualPrice: {
    fontWeight: "700",
    fontFamily: FontFamily.SFBold,
    fontSize: FontSize.size_lg,
  },

  dayTag: {
    fontSize: FontSize.size_mini,
    color: Color.placeholderColor,
  },
});

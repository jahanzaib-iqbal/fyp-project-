import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../../../constants/GlobalStyles";
import FeatureIconData from "./FeatureIconData";

const FeatureSection = ({ iconsData }) => {
  return (
    <View style={styles.featureSection}>
      {iconsData.map((data, index) => (
        <FeatureIconData key={index} icon={data}  />
      ))}
    </View>
  );
};

export default FeatureSection;

const styles = StyleSheet.create({
  //feature section
  featureSection: {
    marginTop: 12,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});

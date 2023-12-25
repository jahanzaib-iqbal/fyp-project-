import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
} from "../../../constants/GlobalStyles";
import { Iconify } from "react-native-iconify";
const FeatureIconData = ({ icon, title }) => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "game-icons:race-car":
        return <Iconify icon="game-icons:race-car" size={20} color="#70dad3" />;
      case "mdi:automatic":
        return <Iconify icon="mdi:automatic" size={20} color="#70dad3" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.featureChild}>
      {renderIcon(icon)}
      <Text style={styles.featureIconText}>{title}</Text>
    </View>
  );
};

export default FeatureIconData;

const styles = StyleSheet.create({
  featureChild: {
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  featureIconText: {
    marginLeft: 6,
    fontSize: FontSize.size_2xs,
    height: 17,
    color: Color.placeholderColor,
    letterSpacing: 0.1,
    fontFamily: FontFamily.SFRegular,
  },
});

import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constants/styles";

const PriceSlider = ({
  min = 1,
  max = 1000,
  step = 2,
  thumbTintColor = "#08adad",
  maximumTrackTintColor = "#ceebeb",
  minimumTrackTintColor = Colors.buttonAndIcons,
  initialValues = [100, 400],
}) => {
  const [value, setValue] = useState(initialValues);

  return (
    <View style={styles.container}>
      <Text style={styles.sliderText}>
        ${value[0]} - ${value[1]}
      </Text>
      <Slider
        caption="<Slider/> 2 thumbs, min, max, and custom tint"
        value={value}
        maximumValue={max}
        minimumValue={min}
        thumbTintColor={thumbTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        minimumTrackTintColor={minimumTrackTintColor}
        step={step}
        animateTransitions={true}
        onValueChange={(newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sliderText: {
    color: Colors.textColor,
    fontSize: 16,
    fontFamily: "SF-Pro-Text-Regular",
  },
});

export default PriceSlider;

import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";

const Type = (props) => {
  const [status, setStatus] = useState(props.status);

  const pressHandler = () => {
    const newStatus = status === "active" ? "disable" : "active";
    setStatus(newStatus);
    console.log(`Pressed: ${newStatus}`);
  };
  let bgcolors =
    status === "active" ? ["#70DAD3", "#35B5AE"] : ["#E3E3E7", "#E3E3E7"];

  return (
    <LinearGradient
      style={[
        status === "active" ? styles.typeContainer : styles.disableContainer,
      ]}
      // style={styles.typeContainer}
      start={[0, 0]}
      end={[1, 1]}
      locations={[0, 1]}
      colors={bgcolors}
    >
      <TouchableOpacity onPress={pressHandler} style={styles.touchable}>
        <Text
          style={
            status === "active" ? styles.buttonText : styles.buttonDisableText
          }
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Type;

const styles = StyleSheet.create({
  typeContainer: {
    borderRadius: 20,
    overflow: "hidden", // To clip the gradient within the border radius
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
  },
  disableContainer: {
    borderRadius: 20,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 0,
  },
  touchable: {
    width: "100%",
  },
  disable: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  buttonDisableText: {
    color: Colors.placeholderColor,
    textAlign: "center",
    fontSize: 16,
  },
});

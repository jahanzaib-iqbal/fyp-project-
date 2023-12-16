import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import { PLACES } from "../data/NewData";
import CustomBackButton from "../ui/CustomBackButton";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/styles";

const DetailScreen = ({ route, navigation }) => {
  const [place, setPlace] = useState(null);
  const { id, dateStr } = route.params;

  useEffect(() => {
    const item = PLACES.find((place) => place.key == id);
    if (item) {
      setPlace(item);
    }
  }, [id]); // Add id as a dependency for useEffect

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <React.Fragment>
      {place ? (
        <View style={{ position: "relative" }}>
          <DetailHeader images={place.images} />
          <CustomBackButton
            onPress={handleBack}
            customStyle={styles.customStyle}
          />
          <View>
            <View>
              <View>
                <View>
                  <Text>{place.title}</Text>
                </View>
                <View>
                  <Ionicons
                    name="heart-outline"
                    size={24}
                    color={Colors.bookMark}
                  />
                </View>
                <View>
                  <View></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Text>No Item Found!</Text>
      )}
    </React.Fragment>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  customStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 50,
    width: 50,
    backgroundColor: "white", // Using Colors.primary for visibility
    position: "absolute",
    top: 50, // Adjust top as needed
    left: 30, // Adjust left as needed
    zIndex: 1, // Ensure it's above other elements
  },
});

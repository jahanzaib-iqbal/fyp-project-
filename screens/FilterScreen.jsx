import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Searchbar from "../components/input/car/Searchbar";
import DateSearch from "../components/input/car/DateSearch";
import PriceSlider from "../components/input/PriceSlider";
import RoomsAndBeds from "../components/RoomsAndBeds";
import { Colors } from "../constants/styles";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Type from "../components/button/Type";

const clickFunc = () => {
  console.log("clickFunc");
};

const FilterScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.MainContainer}>
        <View style={styles.HeaderContainer}>
          <AntDesign name="left" size={20} color="black" />
          <Text style={[styles.title18, { width: "90%", textAlign: "center" }]}>
            Advance Filter
          </Text>
        </View>
        {/* --- */}

        <Searchbar placeholder="Search Your Hotel" />

        <Text style={[styles.title16, { marginTop: 20, marginBottom: 10 }]}>
          How long do you want to stay?
        </Text>

        <DateSearch />

        <Text style={[styles.title16, { marginTop: 20, marginBottom: 10 }]}>
          Property Type
        </Text>

        <View style={styles.typesContainer}>
          <Type text="Hotel" status="active" />
          <Type text="Restaurants" status="disable" />
          <Type text="All" status="disable" />
          <Type text="Resort" status="disable" />
        </View>

        {/*  */}
        <Text style={[styles.title16, { marginTop: 15, marginBottom: 10 }]}>
          Price Range
        </Text>

        <PriceSlider min={1} max={1000} initialValues={[100, 400]} />

        <Text style={[styles.title16, { marginTop: 15, marginBottom: 10 }]}>
          Rooms and Beds
        </Text>
        <RoomsAndBeds />

        {/* Facilities Section */}
        <View style={styles.facilities}>
          <Text style={styles.title16}>Property facilities</Text>
          <Text style={styles.linkText}>See more</Text>
        </View>
        <View style={styles.facilitesContainer}>
          <Type text="All" status="disable" />
          <Type text="Wifi" status="active" />
          <Type text="Swimming Pool" status="disable" />
          <Type text="Gym" status="disable" />
          <Type text="Free Parking" status="disable" />
          <Type text="Air Condition" status="active" />
          <Type text="Security" status="disable" />
        </View>

        {/*  */}
        <View style={styles.footerSection}>
          <View style={styles.resetIconContainer}>
            <Feather
              name="rotate-ccw"
              size={20}
              color={Colors.buttonAndIcons}
            />
            <Text style={styles.title16}>Reset all</Text>
          </View>
          {/* <Type text="Show Result" status="active" onclick={clickFunc} /> */}
          <LinearGradient
            style={styles.typeContainer}
            locations={[0, 1]}
            colors={["#70DAD3", "#35B5AE"]}
          >
            <TouchableOpacity onPress={clickFunc} style={styles.touchable}>
              <Text style={styles.buttonText}>Show Result</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  MainContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    paddingBottom: 50, // Add padding to the bottom to prevent content from being hidden by the bottom of the screen
  },
  HeaderContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  touchable: {
    width: "100%",
  },
  title18: {
    fontFamily: "SF-Pro-Semibold",
    fontSize: 18,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  title16: {
    fontFamily: "SF-Pro-Semibold",
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  facilities: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkText: {
    fontFamily: "SF-Pro-Text-Medium",
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.buttonAndIcons,
  },
  facilitesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  footerSection: {
    marginTop: 15,
    // marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resetIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  button: {
    // borderRadius: 20,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    // backgroundColor: "#3bb6ae",
    // marginVertical: 5,
  },
  typeContainer: {
    borderRadius: 20,
    overflow: "hidden", // To clip the gradient within the border radius
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
});

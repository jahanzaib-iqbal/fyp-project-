import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const ImageSlider = ({ itemsArray }) => {
  const arr = itemsArray;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ height: height / 3 }}>
        <FlatList
          data={arr}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(event) => {
            const x = event.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.round(x / width));
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: height / 2,
                width: width,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                // backgroundColor: "green",
              }}
            >
              <TouchableOpacity
                disabled
                style={{
                  width: "100%",
                  height: "100%",
                  // backgroundColor: "pink",
                }}
              >
                <Image
                  source={item}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            position: "absolute",
            left: "30%",
            bottom: 0,
          }}
        >
          {arr.map((elm, ind) => (
            <View
              key={ind}
              style={{
                height: 8,
                width: currentIndex === ind ? 16 : 8,
                borderRadius: currentIndex === ind ? 6 : 4,
                backgroundColor: currentIndex === ind ? "white" : "gray",
                margin: 4,
              }}
            ></View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Image, TextInput,Pressable } from 'react-native';
import React from 'react';
import { Color, Border, FontFamily, FontSize, Padding } from "../constants/GlobalStyles";
import Searchbar from '../components/input/car/Searchbar';
import { LinearGradient } from "expo-linear-gradient";
const CarHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar/>
      <View style={[styles.dealsSection, styles.sectionLayout]}>
        <View style={[styles.headingSection, styles.renterBtnFlexBox]}>
            <View>
              <Text style={[styles.topRatedCars, styles.homeTypo]}>
                Deal Near You
              </Text>
              <Text style={[styles.carsInLahore, styles.lahoreTypo]}>
                243 cars in Lahore
              </Text>
            </View>
            <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
          </View>
          <View style={[styles.cardSection, styles.cardLayout]}>
            <LinearGradient
              style={styles.carCardLayout}
              locations={[0, 1]}
              colors={["#fff", "rgba(255, 255, 255, 0)"]}
            >
              <Pressable
                style={[styles.pressable, styles.pressableBg]}
                onClick={() => {}}
              >
                <Image
                  style={[styles.carCardChild, styles.botNavPosition]}
                  contentFit="cover"
                  source={require("../assets/icons/frame-7.png")}
                />
                <View style={[styles.frameParent, styles.iconPosition]}>
                  <View>
                    <View>
                      <View style={styles.maskGroupParent}>
                        <Image
                          style={styles.maskGroupIcon}
                          contentFit="cover"
                          source={require("../assets/icons/mask-group.png")}
                        />
                        <Text style={styles.text}>
                          <Text style={styles.text1}>{`4.8 `}</Text>
                          <Text style={styles.text2}>(73)</Text>
                        </Text>
                      </View>
                      <View style={styles.hondaCivicXParent}>
                        <Text
                          style={[styles.hondaCivicX, styles.hondaCivicXTypo]}
                        >
                          2019 Honda Civic X
                        </Text>
                        <Text
                          style={[styles.lahorePakistan, styles.lahoreTypo]}
                        >
                          Lahore, Pakistan
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frameView}>
                      <View style={styles.iconsParent}>
                        <Image
                          style={styles.icons}
                          contentFit="cover"
                          source={require("../assets/icons/icons.png")}
                        />
                        <Text style={[styles.sedan, styles.sedanTypo]}>
                          Sedan
                        </Text>
                      </View>
                      <View style={styles.iconsGroup}>
                        <Image
                          style={styles.icons1}
                          contentFit="cover"
                          source={require("../assets/icons/icons.png")}
                        />
                        <Text style={[styles.automatic, styles.sedanTypo]}>
                          Automatic
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={styles.day}>
                    <Text style={styles.text1}>
                      <Text style={styles.text4}>$526</Text>
                    </Text>
                    <Text style={styles.day1}>
                      <Text style={styles.text1}>
                        <Text style={styles.text6}>{` `}</Text>
                      </Text>
                      <Text style={styles.day2}>/ day</Text>
                    </Text>
                  </Text>
                </View>
                <Image
                  style={[styles.vuesaxlinearheartIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/icons/vuesaxlinearheart.png")}
                />
              </Pressable>
            </LinearGradient>
          </View>
         
        </View>
    </View>
  )
}

export default CarHomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.backgroundColor,
    alignItems: 'center', // Center the searchBar in the container

  },

    // Styles for the dealsSection
    dealsSection: {
     
    },
    sectionLayout: {
      height: 246,
      width: 359,
    },
  
    // Styles for the cardSection
    cardSection: {
      top: 65,
      width: 346,
      alignItems: "center",
      flexDirection: "row",
      left: 0,
      position: "absolute",
      backgroundColor: Color.screenBg,
    },
    cardLayout: {
      height: 182,
      borderBottomLeftRadius: Border.br_3xs,
      borderTopLeftRadius: Border.br_3xs,
    },
  
    // Styles for the LinearGradient component
    carCardLayout: {
      width: 318,
      height: 182,
    },
  
    // Styles for the Pressable component
    pressable: {
      height: "100%",
      width: "100%",
    },
    pressableBg: {
      backgroundColor: Color.greenGradient,
      borderRadius: Border.br_3xs,
    },
  
    // Styles for the Image components
    carCardChild: {
      right: 186,
      width: 132,
      height: 182,
      borderBottomLeftRadius: Border.br_3xs,
      borderTopLeftRadius: Border.br_3xs,
      bottom: 0,
      position: "absolute",
    },
    botNavPosition: {
      bottom: 0,
      position: "absolute",
    },
    iconPosition: {
      left: "50%",
      position: "absolute",
    },
    maskGroupIcon: {
      top: 1,
      width: 12,
      height: 12,
      left: 0,
      position: "absolute",
    },
    vuesaxlinearheartIcon: {
      marginTop: 64,
      marginLeft: 124,
      height: 18,
      width: 18,
      top: "50%",
      left: "50%",
    },
  
    // Styles for the View components
    frameParent: {
      marginTop: -78,
      marginLeft: -13,
      width: 154,
      top: "50%",
      left: "50%",
    },
    maskGroupParent: {
      width: 59,
      height: 16,
    },
    hondaCivicXParent: {
      marginTop: 8,
    },
    iconsParent: {
      alignItems: "center",
      flexDirection: "row",
    },
    iconsGroup: {
      marginLeft: 5,
      height: 17,
      alignItems: "center",
      flexDirection: "row",
    },
    frameView: {
      marginTop: 12,
      flexDirection: "row",
    },
  
    // Styles for the Text components
    text1: {
      color: Color.text,
    },
    text2: {
      color: Color.placeholderColor,
    },
    text: {
      top: 2,
      left: 18,
      lineHeight: 12,
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.tajawalRegular,
      textAlign: "left",
      position: "absolute",
    },
    hondaCivicXTypo: {
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.tajawalRegular,
      lineHeight: 21,
      width: 164,
      color: Color.text,
      textAlign: "left",
    },
    lahoreTypo: {
      lineHeight: 17,
      marginTop: 4,
      color: Color.placeholderColor,
      fontFamily: FontFamily.tajawalRegular,
      fontSize: FontSize.size_smi,
      textAlign: "left",
    },
    sedanTypo: {
      marginLeft: 6,
      lineHeight: 13,
      fontSize: FontSize.size_2xs,
      height: 17,
      alignItems: "flex-end",
      display: "flex",
      color: Color.placeholderColor,
      letterSpacing: 0.1,
      fontFamily: FontFamily.tajawalRegular,
      textAlign: "left",
    },
    text4: {
      fontWeight: "700",
      fontFamily: FontFamily.tajawalBold,
      fontSize: FontSize.size_lg,
    },
    text6: {
      fontSize: FontSize.size_xs,
    },
    day2: {
      fontSize: FontSize.size_mini,
      color: Color.placeholderColor,
    },
    day1: {
      fontFamily: FontFamily.tajawalRegular,
    },
    day: {
      marginTop: 18,
      textAlign: "left",
    },
    hondaCivicX: {
      lineHeight: 21,
      width: 164,
      color: Color.text,
      textAlign: "left",
    },
    lahorePakistan: {
      marginTop: 4,
      letterSpacing: 0.1,
    },
    sedan: {
      width: 34,
    },
    automatic: {
      width: 49,
    },
    icons: {
      width: 18,
      height: 12,
    },
    icons1: {
      width: 14,
      overflow: "hidden",
      height: 12,
    },

  
  

});

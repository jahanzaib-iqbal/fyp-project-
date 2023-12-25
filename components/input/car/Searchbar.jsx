import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';
import { Color, Border, FontFamily, FontSize, Padding } from "../../../constants/GlobalStyles";

const Searchbar = ({placeholder}) => {
  return (
    <View style={styles.searchBar}>
        <Image
          style={[styles.icon, styles.searchIcon]}
          source={require("../../../assets/icons/searchicon.png")}
        />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
        />
        <Image
          style={[styles.icon, styles.filterIcon]}
          source={require("../../../assets/icons/filtericon.png")}
        />
      </View>
  )
}

export default Searchbar;

const styles = StyleSheet.create({
   
    
    
    searchBar: {
      borderRadius: Border.br_53xl,
      backgroundColor: Color.colorWhitesmoke,
      borderColor: Color.colorGainsboro,
      borderWidth: 0.8,
      width: "100%",
      height: 48,
      flexDirection: 'row',
      alignItems: 'center', // Align items vertically in the center
      paddingHorizontal: 10, // Add some padding
    },
  
    input: {
      flex: 1, // Take up all available space
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.SFRegular,
      lineHeight: 32,
      letterSpacing: 0.3,
      paddingVertical: 0, // Remove vertical padding
    },
  
    icon: {
      height: 22,
      width: 22,
    },
  
    searchIcon: {
      marginRight: 15, // Add some margin to the right of the search icon
    },
  
    filterIcon: {
      marginLeft: 10, // Add some margin to the left of the filter icon
    },
  });
  
import React from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';
SafeAreaView
const WelcomeScreen = () => {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('../assets/Ballons.jpeg')} 
        style={styles.backgroundImage}
        resizeMode="contain"
      />
        
      <View style={styles.textContainer}>
          <Text style={styles.title}>New Place, New Home, Travel!</Text>
          <Text style={styles.subtitle}>
            Are you ready to uproot and start over in a new area? Placoo will help you on your journey!
          </Text>
      </View>
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Log in" onPress={() => console.log('Log in pressed')} />
          </View>
          <View style={styles.button}>
            <Button title="Sign up" onPress={() => console.log('Sign up pressed')} color="#f194ff" />
          </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20,
    alignSelf: 'center',
    backgroundColor:'#FCFCFC',
  },
  backgroundImage: {
    width:340,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontFamily:'SF-Pro-Text-Heavy',
    color:'#3B4948',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily:'SF-Pro-Text-Regular',
    color:'#3B4948',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20, // Adjust based on your screen's design
  },
  button: {
    marginBottom: 10, // Creates space between the buttons
  },
});

export default WelcomeScreen;

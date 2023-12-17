import React from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LargeBtn from '../components/button/LargeBtn';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("LoginScreen");
  };
  const handleSignup = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    
    <View style={styles.container}>
      <Image
        source={require('../assets/Ballons.jpg')} 
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
            <LargeBtn 
            title="Login" 
            handlePress={handleLogin}
            backgroundColor='#4e9994'
            />
            
          </View>
          <View style={styles.button}>
          <LargeBtn 
          title="Sign up" 
          handlePress={handleSignup}
          backgroundColor='white'
          border={true}
          />
            
          </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop:15,
    paddingHorizontal:20,
    alignSelf: 'center',
    backgroundColor:'#FCFCFC',
  },
  backgroundImage: {
    width:340,
    height:450,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  textContainer: {
    flex: 1,  
    marginTop:10
  },
  title: {
    fontSize: 22,
    fontFamily:'SF-Pro-Text-Bold',
    color:'#3B4948',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    fontFamily:'SF-Pro-Text-Regular',
    color:'#3B4948',
    textAlign: 'center',
  },
  buttonContainer: {
    flex:1,
    marginBottom: 20, 
    justifyContent:'flex-start'
  },
  button: {
   marginBottom: 10, 
  },
});

export default WelcomeScreen;

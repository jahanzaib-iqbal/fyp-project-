import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

const SplashScreen = ({ onAnimationComplete }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return (
    <LottieView
      ref={animationRef}
      style={styles.animation}
      source={require('../assets/animation/splash.json')}
      loop={false}
      onAnimationFinish={onAnimationComplete}
    />
  );
};

const styles = StyleSheet.create({
  animation:{
    flex:1,
    width:90, 
    height:90,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
export default SplashScreen;

import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

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
      style={{width:200, height:200,alignItems: 'center',justifyContent: 'center'}}
      source={require('../assets/animation.json')}
      loop={false}
      onAnimationFinish={onAnimationComplete}
    />
  );
};

export default SplashScreen;

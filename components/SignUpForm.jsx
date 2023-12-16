import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Input, VStack } from "native-base";
import { Colors, RootScreenStyle } from "../constants/styles";
import LargButton from "../ui/LargButton";
import { useNavigation } from "@react-navigation/native";
const SignUpForm = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={[RootScreenStyle, { marginTop: 50 }]}>
      <VStack space={4} alignItems="flex-start">
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.labelText}>Username</Text>
          <Input variant="rounded" placeholder="jhon" />
        </View>
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.labelText}>Email</Text>
          <Input variant="rounded" placeholder="@gmail.com" />
        </View>
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.labelText}>Password</Text>
          <Input variant="rounded" placeholder="password" />
        </View>
        <LargButton text="Create account" />
        <Pressable
          onPress={handlePress}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          style={() => [
            {
              width: "100%",
            },
            styles.linkPressed,
          ]}
        >
          <Text
            style={[
              styles.linkStyle,
              { color: isPressed ? Colors.gradientButton : Colors.darkBlack },
            ]}
          >
            Already have an account?
          </Text>
        </Pressable>
      </VStack>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  labelText: {
    fontFamily: "SF-Pro-Text-Regular",
    color: Colors.textColor,
    fontSize: 14,
  },
  linkStyle: {
    fontFamily: "SF-Pro-Text-Regular",
    fontSize: 12,
    textAlign: "center",
  },
  linkPressed: {
    color: Colors.gradientButton,
  },
});

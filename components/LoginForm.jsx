import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { Input, VStack } from "native-base";
import { Colors, RootScreenStyle } from "../constants/styles";
import LargButton from "../ui/LargButton";
import { useNavigation } from "@react-navigation/native";
const LoginForm = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={[RootScreenStyle, { marginTop: 50 }]}>
      <VStack space={4} alignItems="flex-start">
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.labelText}>Email</Text>
          <Input variant="rounded" placeholder="@gmail.com" />
        </View>
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.labelText}>Password</Text>
          <Input variant="rounded" placeholder="password" />
        </View>
        <LargButton text="Login" />
        <Pressable
          onPress={handlePress}
          style={() => [
            {
              width: "100%",
            },
            styles.linkPressed,
          ]}
        >
          <Text>Move to Home</Text>
        </Pressable>
      </VStack>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  labelText: {
    fontFamily: "SF-Pro-Text-Regular",
    color: Colors.textColor,
    fontSize: 14,
  },
});

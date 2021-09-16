import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function HeroSection() {
  return (
    <View style={styles.heroContainer}>
      <Text>Hero section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: "center",
  },
});

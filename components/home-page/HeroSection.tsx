import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CustomButton } from "../CustomButton";

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.title}>10% Discount</Text>
        <Text style={styles.description}>Grab yours one {"\n"}Today</Text>
        <CustomButton
          text={"Explore"}
          bgColor={Colors.pallete.white}
          textColor={Colors.pallete.green}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  heroContainer: {
    margin: 5,
    backgroundColor: Colors.pallete.green,
    padding: 16,
    width: "100%",
    alignItems: "flex-start",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 16,
    color: "white",
    fontSize: 20,
  },
});

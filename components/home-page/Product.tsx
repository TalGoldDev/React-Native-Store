import React from "react";
import { View, Text, Button, Image } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CustomButton } from "../CustomButton";

interface Props {
  name: string;
  price: number;
  id: string;
  image: string;
  bgColor: string;
}

export const Product = (props: Props) => {
  const classes = styles(props);

  return (
    <View>
      <Text>name</Text>
      <Text>Price</Text>
      <CustomButton
        text={"Buy"}
        textColor={props.bgColor}
        bgColor={Colors.pallete.white}
      ></CustomButton>
      <Image source={require(props.image)}></Image>
    </View>
  );
};

const styles = (props: { bgColor: any }) =>
  StyleSheet.create({
    container: { position: "relative" },
    name: {},
    price: {},
    image: {},
  });

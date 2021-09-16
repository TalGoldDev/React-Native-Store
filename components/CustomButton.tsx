import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
  text: string;
  bgColor: string;
  textColor: string;
}

export const CustomButton = (props: Props) => {
  const classes = styles(props);

  return (
    <View style={classes.btnContainer}>
      <Button
        title={props.text}
        onPress={() => {}}
        color={props.textColor}
      ></Button>
    </View>
  );
};

const styles = (props: { bgColor: any }) =>
  StyleSheet.create({
    btnContainer: {
      marginTop: 16,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 28,
      paddingRight: 28,
      backgroundColor: props.bgColor,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: props.bgColor,
    },
  });

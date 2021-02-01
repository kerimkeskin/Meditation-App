import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";
import colors from "../assets/colors/colors";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const CategoryBox = ({ children, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:85,
    alignItems: "center",
  },
  box: {
    width: 60,
    height: 60,
    borderRadius: 23,
    backgroundColor: colors.light_purple,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    margin:4,
    color: "#fff",
    fontSize: 15,
  },
});

export default CategoryBox;

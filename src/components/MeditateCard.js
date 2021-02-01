import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const MeditateCard = ({ children, text, height }) => {
  return (
    <View style={[styles.container, { height: height }]}>
      {children}
      <View style={styles.textwrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width / 2.43,
    marginBottom:Height/37.33
  },
  text: {
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  textwrapper: {
    width: "100%",
    height: "15%",
    position: "absolute",
    bottom: Height/130,
    alignItems: "center",
  },
});

export default MeditateCard;

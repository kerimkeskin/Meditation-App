import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
console.log(Height);
const ClassicButton = ({ bg, title, onPress }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity="0.7"
        style={[styles.button, { backgroundColor: `${bg}` }]}
      >
        <Text style={styles.text}> {title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Width * 0.8,
    height: Height / 12,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default ClassicButton;

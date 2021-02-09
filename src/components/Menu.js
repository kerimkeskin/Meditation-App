import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const Height = Dimensions.get("window").height;

const Menu = ({ children, text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>{children}</View>
      <View style={styles.textWrappper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Height / 19,
    flexDirection: "row",
    marginVertical: "3%",
  },
  icon: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrappper: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    alignSelf: "center",
  },
});

export default Menu;

import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Sliders from "@react-native-community/slider";
import colors from "../assets/colors/colors";

const Width = Dimensions.get("window").width;

const Slider = () => {
  return (
    <View style={styles.container}>
      <Sliders
        style={{ width: Width / 1.239 }}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor={colors.turquoise}
        minimumTrackTintColor={colors.soft_black}
        maximumTrackTintColor={colors.light_brown}
      />
      <View style={styles.textwrapper}>
        <Text style={styles.text}>01:30</Text>
        <Text style={styles.text}>45:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  textwrapper: {
    width: "95%",
    height: "40%%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
});

export default Slider;

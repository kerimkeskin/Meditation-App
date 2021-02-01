import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const Header = ({ subtext, text }) => {
  return (
    <View style={styles.headercontainer}>
      <View style={styles.header}>
        <Text style={styles.headertext}>{text}</Text>
      </View>
      <View style={styles.headersubtextwrapper}>
        <Text style={styles.headersubtext}>{subtext}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    position: "absolute",
    height: Height / 4.28,
    width: Width,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    height: "30%",
    marginTop: "7%",
  },
  headertext: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
  },
  headersubtext: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  headersubtextwrapper: {
    width: "80%",
  },
});
export default Header;

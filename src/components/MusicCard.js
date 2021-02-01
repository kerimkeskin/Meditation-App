import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const MusicCard = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>{children}</View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subtext}>45 dak UYKU MÜZİĞİ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Height / 5.14,
    width: Width / 2.33,
    marginTop: "4%",
    alignItems: "center",
  },
  imagecontainer: {
    alignItems: "center",
    width: "100%",
    height: Height / 7.288,
  },
  textcontainer: {
    justifyContent: "space-around",
    flex: 1,
  },
  text: {
    color: "#E6E7F2",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  subtext: {
    color: "#E6E7F2",
    fontSize: 11,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default MusicCard;

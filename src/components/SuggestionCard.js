import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SuggestionCard = ({ bgcolor, title, subtitle, source }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.image_bg, { backgroundColor: `${bgcolor}` }]}>
        <Image style={styles.image} resizeMode="contain" source={source} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width / 2.6,
    height: Height / 4.6,
    marginEnd: Width / 20,
    marginTop: Height * 0.02,
  },
  image_bg: {
    height: "70%",
    width: "100%",
    borderRadius: 10,
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: "4%",
    marginLeft: "2%",
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
  },
  subtitle: {
    marginTop: "2%",
    marginLeft: "2%",
    color: "#A1A4B2",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default SuggestionCard;

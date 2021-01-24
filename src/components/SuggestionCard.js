import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { SvgUri } from "react-native-svg";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SuggestionCard = ({ bgcolor, title, subtitle, uri }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.image_bg, { backgroundColor: `${bgcolor}` }]}>
        <SvgUri
          width={Width / 2.6}
          height={"90%"}
          style={styles.image}
          uri={uri}
        />
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
    right: 0,
    bottom: 0,
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

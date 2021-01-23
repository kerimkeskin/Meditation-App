import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import colors from "../assets/colors/colors";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import CourseCard from "../components/CourseCard";
import HomeBG from "../assets/images/BG-Home";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
console.log(Height * 0.3627 * 0.645);
const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ flex: 1 }}>
      <HomeBG style={styles.bg} />
      <View style={styles.titlecontainer}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>Günaydın, KESKİN</Text>
        </View>
      </View>
      <View style={styles.cardcontainer}>
        <View style={styles.cardwrapper}>
          <View style={styles.card}>
            <CourseCard />
            <CourseCard />
          </View>
          <View style={styles.bodycard}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.dark_blue,
  },
  titlecontainer: {
    width: Width,
    height: Height * 0.18,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titlebox: {
    width: Width - Width / 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
    fontSize: 28,
  },
  cardcontainer: {
    marginTop: "2%",
    alignItems: "center",
  },
  cardwrapper: {
    width: Width - Width * 0.096,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Height * 0.3627,
  },
  bodycard: {
    backgroundColor: "#fff",
    width: "100%",
    height: "29.18%",
    position: "absolute",
    bottom: 0,
    borderRadius: 10,
  },
});

export default HomeScreen;

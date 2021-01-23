import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const CourseCard = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.cardcontainer}>
      <ImageBackground
        style={styles.bg}
        resizeMode="cover"
        // source={require("../assets/images/home-card-1.png")}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardcontainer: {
    // width: Width / 2.35,
    // height: Height / 4.266,
    // width: '47%',
    height: "64.61%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  bg: {
    width: Width / 2.3,
    height: Height / 4.266,
  },
});

export default CourseCard;

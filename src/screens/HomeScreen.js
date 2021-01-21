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

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

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
        <ImageBackground
          resizeMode="contain"
          style={styles.bg}
          source={require("../assets/images/home-bg.png")}
        >
          <View style={styles.titlecontainer}>
            <View style={styles.titlebox}>
              <Text style={styles.title}>Günaydın, KESKİN</Text>
            </View>
          </View>
        </ImageBackground>
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
});

export default HomeScreen;

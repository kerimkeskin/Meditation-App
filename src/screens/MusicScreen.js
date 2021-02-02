import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MusicBG from "../assets/images/MusicScreen/BG-Music";
import colors from "../assets/colors/colors";
import Player from "../components/Player";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const MusicScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark_blue }}>
      <MusicBG />
      <View style={styles.container}>
        <Player />
        <Slider/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Height / 4.451,
    alignItems:'center',
    // backgroundColor: "red",
    position: "absolute",
    bottom: Height / 5.39 - Height * 0.125,
  },
});

export default MusicScreen;

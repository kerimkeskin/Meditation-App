import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MusicBG from "../assets/images/MusicScreen/BG-Music";
import colors from "../assets/colors/colors";
import Player from "../components/Player";
import Slider from "../components/Slider";
import { CancelIcon, DownloadIcon } from "../components/icons";
const Height = Dimensions.get("window").height;

const MusicScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark_blu }}>
      <MusicBG />
      <SafeAreaView style={styles.iconcontainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <CancelIcon />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <DownloadIcon />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.musiccontainer}>
        <Text style={styles.title}>Tatlı Uyku</Text>
        <Text style={styles.subtitle}>Uyku Müziği</Text>
      </View>
      <View style={styles.playercontainer}>
        <Player />
        <Slider />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  musiccontainer: {
    position: "absolute",
    top: Height / 2.286,
    width: "100%",
    height: Height / 13.668,
    alignItems: "center",
  },
  playercontainer: {
    width: "100%",
    height: Height / 4.451,
    alignItems: "center",
    position: "absolute",
    bottom: Height / 5.39 - Height * 0.125,
  },
  title: {
    color: "#fff",
    fontSize: 34,
    fontFamily: "Montserrat_700Bold",
  },
  subtitle: {
    color: colors.light_gray,
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    textTransform: "uppercase",
    marginTop: "1%",
  },
  iconcontainer: {
    position: "absolute",
    width: "90%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default MusicScreen;

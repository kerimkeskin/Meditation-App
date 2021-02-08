import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BackwardIcon, ForwardIcon, PlayButton } from "../components/icons";
import colors from "../assets/colors/colors";
const Player = () => {
  const [play, setPlay] = React.useState(true);
  const _HandleChange = () => {
    setPlay(!play);
  };
  return (
    <View style={styles.playerbox}>
      <BackwardIcon />
      <PlayButton />
      {play ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.icon}
          onPress={_HandleChange}
        >
          <FontAwesome5 name="play" size={24} color={colors.soft_black} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.icon}
          onPress={_HandleChange}
        >
          <FontAwesome5 name="stop" size={24} color={colors.soft_black} />
        </TouchableOpacity>
      )}
      <ForwardIcon />
    </View>
  );
};
const styles = StyleSheet.create({
  playerbox: {
    width: "90%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Player;

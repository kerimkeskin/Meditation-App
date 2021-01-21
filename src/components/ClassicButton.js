import React from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const ClassicButton = ({ bg, title, onPress }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } 
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity="0.7"
        style={[styles.button, { backgroundColor: `${bg}` }]}
      >
        <Text style={styles.text}> {title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Width * 0.8,
    height: Height / 12,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontWeight: "bold",
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default ClassicButton;

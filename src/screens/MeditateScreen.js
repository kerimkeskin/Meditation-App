import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../assets/colors/colors";
import Category from "../components/Category";
import Header from "../components/Header";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const MeditateScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark_blue }}>
      <Header
        text="Meditasyon"
        subtext="Zihinlerimizin gündelik hareketlerini ne zaman ve nasıl yaptığını öğrenebiliriz."
      />
      <View style={styles.categorycontainer}>
        <View style={{ alignItems: "center", width: Width * 0.9 }}>
          <Category />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categorycontainer: {
    position: "absolute",
    width: Width,
    alignItems: "center",
    height: Height / 7.5,
    top: Height / 4.68,
  },
});

export default MeditateScreen;

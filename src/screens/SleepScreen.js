import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SleepBG from "../assets/images/BG-Sleep";
import colors from "../assets/colors/colors";
import Category from "../components/Category";
import SleepBodyCard from "../components/SleepBodyCard";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SleepScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark_blue }}>
      <SleepBG />
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}>UYKU HİKAYELERİ</Text>
        </View>
        <View style={styles.headersubtextwrapper}>
          <Text style={styles.headersubtext}>
            Derin ve doğal bir uykuya dalmanıza yardımcı olacak yatıştırıcı
            hikayeler
          </Text>
        </View>
      </View>
      <View style={styles.categorycontainer}>
        <Category />
      </View>
      <View style={styles.bodycard}>
        <SleepBodyCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    position: "absolute",
    height: Height / 4.28,
    width: Width,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    height: "30%",
    marginTop: "7%",
  },
  headertext: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Montserrat_700Bold",
  },
  headersubtext: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  headersubtextwrapper: {
    width: "80%",
  },
  categorycontainer: {
    position: "absolute",
    width: Width,
    height: Height / 7.5,
    top: Height / 4.88,
  },
  bodycard: {
    width: Width,
    position: "absolute",
    top: Height / 4.88 + Height / 7.5,
  },
});

export default SleepScreen;

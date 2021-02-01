import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import SleepBG from "../assets/images/BG-Sleep";
import colors from "../assets/colors/colors";
import Category from "../components/Category";
import SleepBodyCard from "../components/SleepBodyCard";
import Card1 from "../assets/images/Card1";
import Card2 from "../assets/images/Card2";
import Card3 from "../assets/images/Card3";
import Card4 from "../assets/images/Card4";
import MusicCard from "../components/MusicCard";

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
        <View style={{ alignItems: "center", width: Width * 0.9 }}>
          <Category />
        </View>
      </View>
      <View style={styles.bodycard}>
        <SleepBodyCard />
      </View>
      <View style={styles.MusicCardContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MusicCard title={"Gece Çölü"}>
              <Card1 />
            </MusicCard>
            <MusicCard title={"Tatlı Uyku"}>
              <Card2 />
            </MusicCard>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MusicCard title={"Yürüyüş"}>
              <Card3 />
            </MusicCard>
            <MusicCard title={"İş Yorgunluğu"}>
              <Card4 />
            </MusicCard>
          </View>
        </ScrollView>
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
    alignItems: "center",
    height: Height / 7.5,
    top: Height / 4.88,
  },
  bodycard: {
    width: Width,
    position: "absolute",
    top: Height / 4.88 + Height / 7.5,
  },
  MusicCardContainer: {
    position: "absolute",
    width: Width,
    height: 500,
    backgroundColor: colors.dark_blue,
    alignItems: "center",
    top: Height / 4.88 + Height / 7.5 + Height / 3.6,
  },
  scroll: {
    width: Width * 0.9,
    justifyContent: "space-between",
  },
});

export default SleepScreen;

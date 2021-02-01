import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import colors from "../assets/colors/colors";
import Category from "../components/Category";
import Header from "../components/Header";
import {
  MedBodyCard,
  AnxietCard,
  BestSleepCard,
  PlayIcon,
  CalmCard,
  StressCard,
} from "../assets/images/MeditateScreen";
import MeditateCard from "../components/MeditateCard";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const MeditateScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.dark_blue,
        alignItems: "center",
      }}
    >
      <Header
        text="Meditasyon"
        subtext="Zihinlerimizin gündelik hareketlerini ne zaman ve nasıl yaptığını öğrenebiliriz."
      />
      <View style={styles.categorycontainer}>
        <View style={{ alignItems: "center", width: Width * 0.9 }}>
          <Category />
        </View>
      </View>

      <View style={styles.bodycardcontainer}>
        <View style={styles.bodycard}>
          <MedBodyCard />
          <PlayIcon />
          <View style={styles.bodytextwrapper}>
            <Text style={styles.bodytext}>Günlük Sakinlik</Text>
            <Text style={styles.bodysubtext}>30 Nis - Müziği Duraklat </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          top: Height / 4.68 + Height / 7.5 + Height / 7,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cardcontainer}
        >
          <View>
            <MeditateCard height={Height / 4.266} text="7 Gün Sakin">
              <CalmCard />
            </MeditateCard>
            <MeditateCard height={Height / 5.43} text="En İyi Uyku">
              <BestSleepCard />
            </MeditateCard>
          </View>
          <View>
            <MeditateCard height={Height / 5.43} text="Endişeden Uzak">
              <AnxietCard />
            </MeditateCard>
            <MeditateCard height={Height / 4.266} text="Mutluluk Arttırıcı">
              <StressCard />
            </MeditateCard>
          </View>
        </ScrollView>
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
  bodycardcontainer: {
    width: Width,
    alignItems: "center",
    position: "absolute",
  },
  bodycard: {
    width: Width * 0.9,
    height: Height / 9.43,
    borderRadius: 10,
    top: Height / 4.68 + Height / 7.5,
  },
  bodytextwrapper: {
    height: Height / 9.43,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodytext: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: colors.soft_black,
  },
  bodysubtext: {
    color: colors.soft_black2,
    marginTop: 2,
    fontSize: 11,
    fontFamily: "Montserrat_600SemiBold",
  },
  cardcontainer: {
    width: Width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MeditateScreen;

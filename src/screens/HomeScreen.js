import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import colors from "../assets/colors/colors";
import CourseCard from "../components/CourseCard";
import { SvgUri } from "react-native-svg";
import SuggestionCard from "../components/SuggestionCard";
import HomeBG from "../assets/images/BG-Home";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeBG style={styles.bg} />
      <View style={styles.titlecontainer}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>Günaydın, KESKİN</Text>
        </View>
      </View>
      <View style={styles.cardcontainer}>
        <View style={styles.cardwrapper}>
          <View style={styles.card}>
            <CourseCard
              buttonbg="#fff"
              buttoncolor="#000"
              title="Temel"
              subtitle="KURS"
              color="#fff"
              bg={colors.light_purple}
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611481876/card2_h9xxha.svg"
            />

            <CourseCard
              buttonbg="#000"
              buttoncolor="#fff"
              title="Relax"
              subtitle="MÜZİK"
              color="#000"
              bg={colors.light_brown}
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611481205/card2_bycuyt.svg"
            />
          </View>
          <View style={styles.bodycard}>
            <SvgUri
              width="40%"
              height="100%"
              style={{ position: "absolute", right: 0 }}
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611496198/Frame_fhcovw.svg"
            />
            <View style={styles.bodytextwrapper}>
              <Text style={styles.bodytext}>Günlük Düşünce</Text>
              <Text style={styles.bodsubtext}>MEDİTASYON 3-10 dak</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.footer}>
          <View style={styles.footertitlewrapper}>
            <Text style={styles.footertitle}>Sizin için Öneriliyor</Text>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <SuggestionCard
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611482031/suggestion1_w3sueh.svg"
              title="Odaklanma"
              subtitle="MEDİTASYON 3-10 dk"
              bgcolor={colors.card_light_green}
            />
            <SuggestionCard
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611482031/suggestion2_c4bpkw.svg"
              title="Mutluluk"
              subtitle="MEDİTASYON 3-10 dk"
              bgcolor={colors.light_brown}
            />
            <SuggestionCard
              uri="https://res.cloudinary.com/hgxc6a8kj/image/upload/v1611482031/suggestion3_qoucih.svg"
              title="Kişisel Gelişim"
              subtitle="MEDİTASYON 3-10 dk"
              bgcolor={colors.card_dark_green}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    backgroundColor: colors.dark_blue,
  },
  titlecontainer: {
    width: Width,
    height: Height * 0.17,
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
  cardcontainer: {
    marginTop: "4%",
    alignItems: "center",
  },
  cardwrapper: {
    width: Width - Width * 0.096,
    width: Width - Width * 0.096,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Height * 0.3627,
  },
  bodycard: {
    backgroundColor: colors.card_purple,
    width: "100%",
    height: "29.18%",
    position: "absolute",
    bottom: 0,
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    width: Width - Width * 0.096,
  },
  footertitlewrapper: {
    marginTop: "4%",
    width: "100%",
    height: Height * 0.037,
  },
  footertitle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
  },
  bodytextwrapper: {
    flex: 1,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodytext: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
  },
  bodsubtext: {
    color: "#fff",
    marginTop: 2,
    fontSize: 11,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default HomeScreen;

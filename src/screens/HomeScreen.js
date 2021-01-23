import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import colors from "../assets/colors/colors";
import CourseCard from "../components/CourseCard";
import SuggestionCard from "../components/SuggestionCard";
import HomeBG from "../assets/images/BG-Home";
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
      <HomeBG style={styles.bg} />
      <View style={styles.titlecontainer}>
        <View style={styles.titlebox}>
          <Text style={styles.title}>Günaydın, KESKİN</Text>
        </View>
      </View>
      <View style={styles.cardcontainer}>
        <View style={styles.cardwrapper}>
          <View style={styles.card}>
            <CourseCard />
            <CourseCard />
          </View>
          <View style={styles.bodycard}></View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.footer}>
          <View style={styles.footertitlewrapper}>
            <Text style={styles.footertitle}>Sizin için Öneriliyor</Text>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <SuggestionCard
              source={require("../assets/images/focus.png")}
              title="Odaklanma"
              subtitle="MEDİTASYON 3-10 dk"
              bgcolor={colors.card_light_green}
            />
            <SuggestionCard
              source={require("../assets/images/happiness.png")}
              title="Mutluluk"
              subtitle="MEDİTASYON 3-10 dk"
              bgcolor={colors.light_brown}
            />
            <SuggestionCard
              source={require("../assets/images/growth.png")}
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
    backgroundColor: "#fff",
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
});

export default HomeScreen;

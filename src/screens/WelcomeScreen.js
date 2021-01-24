import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import colors from "../assets/colors/colors";
import WelcomeBG from "../assets/images/BG-welcome";
import ClassicButton from "../components/ClassicButton";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const WelcomeScreen = ({ navigation }) => {
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
      <WelcomeBG style={styles.bg} />
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Merhaba KESKİN</Text>
          <Text style={styles.headertext2}>Silent Moon'a Hoşgeldin</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodywrapper}>
          <Text style={styles.bodytext}>
            Uygulamayı keşfedin, meditasyona hazırlanmak için biraz huzur bulun.
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <ClassicButton
          onPress={() => {
            navigation.navigate("HomeSt");
          }}
          title={"HADİ BAŞLAYALIM"}
          bg={colors.light}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    backgroundColor: colors.light_blue,
  },
  headercontainer: {
    width: Width,
    height: Height / 4.76,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  header: {
    width: Width,
    justifyContent: "flex-end",
  },
  headertext: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Montserrat_800ExtraBold",
    textAlign: "center",
  },
  headertext2: {
    color: "#fff",
    fontSize: 27,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
  },
  body: {
    width: Width,
    height: Height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bodywrapper: {
    width: Width * 0.5,
  },
  bodytext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Montserrat_600SemiBold",
  },
  btn: {
    height: Height * 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
export default WelcomeScreen;

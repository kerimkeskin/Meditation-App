import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import colors from "../assets/colors/colors";
import ClassicButton from "../components/ClassicButton";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="contain"
        style={styles.bg}
        source={require("../assets/images/bg-welcome.png")}
      >
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Merhaba KESKİN</Text>
            <Text style={styles.headertext2}>Silent Moon'a Hoşgeldin</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodywrapper}>
            <Text style={styles.bodytext}>
              Uygulamayı keşfedin, meditasyona hazırlanmak için biraz huzur
              bulun.
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <ClassicButton
            onPress={() => navigation.navigate("Home")}
            title={"HADİ BAŞLAYALIM"}
            bg={colors.light}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
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
    fontWeight: "bold",
    textAlign: "center",
  },
  headertext2: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "400",
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
    fontSize: 17,
    fontWeight: "300",
  },
  btn: {
    height: Height * 0.5,
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default WelcomeScreen;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
console.log(Height);

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
    backgroundColor: "#8E97FD",
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
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
  },
  headertext2: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "400",
  },
});

export default WelcomeScreen;

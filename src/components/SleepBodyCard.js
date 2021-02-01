import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import { Feather } from "@expo/vector-icons";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SleepBodyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../assets/images/SleepScreen/bodycard.png")}
        />
        <View style={styles.icon}>
          <Feather name="lock" size={16} color="white" />
        </View>
        <View style={styles.header}>
          <Text style={styles.bodytitle}>Okyanus Ayı</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.bodysubtitle}>
            En popüler uyku sesimizin kesintisiz 8 saatlik mix'leri
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>BAŞLA</Text>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    width: Width * 0.9,
    height: Height / 3.84,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "auto",
    borderRadius: 10,
  },
  header: {
    width: "100%",
    height: "45%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middle: {
    width: "60%",
    height: "25%",
    position: "absolute",
    top: "45%",
    justifyContent: "flex-end",
    alignSelf: "center",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "30%",
    position: "absolute",
    top: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  bodytitle: {
    fontSize: 36,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
  },
  bodysubtitle: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  button: {
    width: "18.79%",
    height: "45%",
    backgroundColor: colors.light,
    opacity: 0.7,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 12,
    letterSpacing: 1,
    color: "#000",
    fontFamily: "Montserrat_600SemiBold",
  },
  icon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: 30,
    height: 30,
    position: "absolute",
    borderRadius: 50,
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SleepBodyCard;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../assets/colors/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import Menu from "../components/Menu";
import { Entypo, Ionicons } from "@expo/vector-icons";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark_blue }}>
      <View style={styles.header}>
        <Text style={styles.headertext}>PROFİL</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.pp}
          source={require("../assets/images/ProfileScreen/profile.jpg")}
        />
        <TouchableOpacity
          style={{ position: "absolute", top: "8%", right: "5%" }}
        >
          <FontAwesome5 name="edit" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.textwrapper}>
          <Text style={styles.name}>Kerim KESKİN</Text>
          <Text style={styles.id}>@keskin</Text>
        </View>
      </View>
      <ScrollView style={styles.menucontainer}>
        <Menu text={"İstatistikler"}>
          <Entypo name="line-graph" size={24} color="white" />
        </Menu>
        <Menu text={"Ayarlar"}>
          <Ionicons name="settings-sharp" size={24} color="white" />
        </Menu>
        <Menu text={"Çıkış"}>
          <Entypo name="log-out" size={24} color="white" />
        </Menu>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Width,
    backgroundColor: colors.card_purple,
    height: Height / 3,
  },
  card: {
    width: Width * 0.9,
    height: Height / 3.5,
    backgroundColor: colors.dark_blue,
    borderRadius: 15,
    position: "absolute",
    top: Height / 6.5,
    left: (Width - Width * 0.9) / 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.39,
    shadowRadius: 46.0,
    elevation: 14,
  },
  pp: {
    alignSelf: "center",
    marginTop: "10%",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  textwrapper: {
    marginTop: "5%",
  },
  name: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
  },
  id: {
    fontSize: 17,
    color: colors.light_gray,
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  headertext: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
    justifyContent: "flex-start",
    marginTop: "14%",
    letterSpacing: 1,
  },
  menucontainer: {
    width: Width * 0.9,
    height: Height,
    // backgroundColor: "red",
    alignSelf: "center",
    position: "absolute",
    top: Height / 3.5 + Height / 5.4,
  },
});

export default ProfileScreen;

import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { SvgUri } from "react-native-svg";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const CourseCard = ({
  bg,
  uri,
  color,
  title,
  subtitle,
  buttonbg,
  buttoncolor,
}) => {
  return (
    <View style={[styles.cardcontainer, { backgroundColor: `${bg}` }]}>
      <SvgUri style={{ position: "absolute", right: 4, top: 4 }} uri={uri} />
      <View style={styles.leftside}>
        <View style={styles.coursetextwrapper}>
          <Text style={[styles.coursetext, { color: `${color}` }]}>
            {title}
          </Text>
          <Text style={[styles.coursetext2, { color: `${color}` }]}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.minwrapper}>
        <Text style={[styles.mintext, { color: `${color}` }]}>3-10 dak</Text>
      </View>
      <TouchableOpacity
        activeOpacity="0.6"
        style={[styles.button, { backgroundColor: `${buttonbg}` }]}
      >
        <Text style={[styles.buttontext, { color: `${buttoncolor}` }]}>
          BAŞLA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardcontainer: {
    borderRadius: 10,
    width: Width / 2.3,
    height: Height / 4.266,
  },
  bg: {
    backgroundColor: "red",
    width: Width / 2.3,
    height: Height / 4.266,
  },
  leftside: {
    width: "45%",
    justifyContent: "flex-end",
    height: "75%",
    alignItems: "center",
  },
  coursetextwrapper: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  coursetext: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  coursetext2: {
    fontSize: 12,
    fontFamily: "Montserrat_600SemiBold",
  },
  minwrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: "25%",
  },
  mintext: {
    color: "#fff",
    fontSize: 11,
    fontFamily: "Montserrat_600SemiBold",
  },
  button: {
    position: "absolute",
    right: "7%",
    bottom: "7%",
    width: Width / 5.81,
    height: Height / 24.266,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 12,
    letterSpacing: 0.3,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default CourseCard;

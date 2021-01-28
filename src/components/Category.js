import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import CategoryBox from "../components/CategoryBox";
import {
  AllIcon,
  KidsIcon,
  FavoriteIcon,
  AnxiousIcon,
  SleepIcon_Cat,
} from "../components/icons";

const Category = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-around",
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <CategoryBox text="Hepsi">
        <AllIcon />
      </CategoryBox>
      <CategoryBox text="Favoriler">
        <FavoriteIcon />
      </CategoryBox>
      <CategoryBox text="Endişeli">
        <AnxiousIcon />
      </CategoryBox>
      <CategoryBox text="Uyku">
        <SleepIcon_Cat />
      </CategoryBox>
      <CategoryBox text="Çocuklar">
        <KidsIcon />
      </CategoryBox>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Category;

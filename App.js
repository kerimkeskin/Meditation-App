import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  const [home, sethome] = useState(true);
  return (
    <View style={styles.container}>
      {home ? (
        <WelcomeScreen onPress={() => sethome(false)} />
      ) : (
        <Navigator />
      )}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

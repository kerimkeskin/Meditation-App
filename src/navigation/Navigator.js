import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  WelcomeScreen,
  HomeScreen,
  MusicScreen,
  DetailScreen,
  SleepScreen,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({});

export default Navigator;
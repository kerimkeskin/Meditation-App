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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const WelcomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNav} />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

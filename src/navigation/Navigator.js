import React from "react";
import {
  WelcomeScreen,
  HomeScreen,
  MusicScreen,
  DetailScreen,
  SleepScreen,
  MeditateScreen,
  ProfileScreen,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";

const Stack = createStackNavigator();
const Meditate = createStackNavigator();
const Music = createStackNavigator();
const Tab = createBottomTabNavigator();
const Sleep = createStackNavigator();
const Profile = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HomeStack"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
const SleepTab = () => {
  return (
    <Sleep.Navigator>
      <Sleep.Screen
        options={{
          headerShown: false,
        }}
        name="SleepStack"
        component={SleepScreen}
      />
    </Sleep.Navigator>
  );
};
const MeditateTab = () => {
  return (
    <Meditate.Navigator>
      <Meditate.Screen
        options={{
          headerShown: false,
        }}
        name="MeditateStack"
        component={MeditateScreen}
      />
    </Meditate.Navigator>
  );
};
const MusicTab = () => {
  return (
    <Music.Navigator>
      <Music.Screen
        options={{
          headerShown: false,
        }}
        name="Music"
        component={MusicScreen}
      />
    </Music.Navigator>
  );
};
const ProfileTab = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        options={{
          headerShown: false,
        }}
        name="Music"
        component={ProfileScreen}
      />
    </Profile.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: { width: "100%" },
          style: {
            backgroundColor: colors.dark_blue,
            height: "12.5%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 2.58,
            shadowRadius: 36.0,
            elevation: 24,
            borderTopWidth: 0,
          },
          labelStyle: { fontSize: 14 },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Ana Sayfa",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={31}
                color={focused ? "white" : colors.light_gray}
              />
            ),
          }}
          name="Home"
          component={HomeTab}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Uyku",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="moon"
                size={29}
                color={focused ? "white" : colors.light_gray}
              />
            ),
          }}
          name="Sleep"
          component={SleepTab}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Meditasyon",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="meditation"
                size={29}
                color={focused ? "white" : colors.light_gray}
              />
            ),
          }}
          name="Meditate"
          component={MeditateTab}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Müzik",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="music"
                size={30}
                color={focused ? "white" : colors.light_gray}
              />
            ),
          }}
          name="Music"
          component={MusicTab}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user"
                size={27}
                color={focused ? "white" : colors.light_gray}
              />
            ),
          }}
          name="Profile"
          component={ProfileTab}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

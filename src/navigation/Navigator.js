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
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../assets/colors/colors";
import {
  HomeIcon,
  MeditateIcon,
  MusicIcon,
  SleepIcon,
  ProfileIcon,
} from "../components/icons";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

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

const BottomTab = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelPosition: "below-icon",
        activeTintColor: "#fff",
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

        labelStyle:
          Width > 700
            ? {
                fontSize: 16,
                bottom: -5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat_700Bold",
              }
            : {
                fontSize: 13,
                bottom: 5,
                fontFamily: "Montserrat_700Bold",
              },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Ana Sayfa",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={[
                  styles.box,
                  { backgroundColor: focused && colors.light_purple },
                ]}
              >
                <HomeIcon fill={focused ? "#fff" : colors.icon_color} />
              </View>
            </View>
          ),
        }}
        name="Home"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Uyku",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.box,
                { backgroundColor: focused && colors.light_purple },
              ]}
            >
              <SleepIcon fill={focused ? "#fff" : colors.icon_color} />
            </View>
          ),
        }}
        name="Sleep"
        component={SleepTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Meditasyon",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.box,
                { backgroundColor: focused && colors.light_purple },
              ]}
            >
              <MeditateIcon fill={focused ? "#fff" : colors.icon_color} />
            </View>
          ),
        }}
        name="Meditate"
        component={MeditateTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Müzik",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.box,
                { backgroundColor: focused && colors.light_purple },
              ]}
            >
              <MusicIcon fill={focused ? "#fff" : colors.icon_color} />
            </View>
          ),
        }}
        name="Music"
        component={MusicTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.box,
                { backgroundColor: focused && colors.light_purple },
              ]}
            >
              <ProfileIcon fill={focused ? "#fff" : colors.icon_color} />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileTab}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeSt" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
};

const styles = StyleSheet.create({
  box: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
});

export default Navigator;

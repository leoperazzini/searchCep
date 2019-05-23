import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import React from "react";

import MainScreen from "../components/main/main";
import FormLogin from "../components/form/formLogin";

import CustomDrawerContentComponent from "./customDrawer";

import { Dimensions, Animated, Easing } from "react-native";

const { width, height } = Dimensions.get("window");

const LoginNavigation = createStackNavigator(
  {
    ScreenLogin: { screen: FormLogin }
  },
  {
    headerMode: "none"
  }
);

const MainTabNavigator = createDrawerNavigator(
  {
    MainScreen: { screen: MainScreen }
  },
  {
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: width * 0.8,
    drawerType: "slide",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginNavigation,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "Login"
    }
  )
);

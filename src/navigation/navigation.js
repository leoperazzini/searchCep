import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import React from "react";

import MainScreen from "../components/main/main";
import FormLogin from "../components/login/formLogin";

import CustomDrawerContentComponent from "./customDrawer";

import { Dimensions, Animated, Easing } from "react-native";

import { fromTop, fromRight } from "react-navigation-transitions";

const { width, height } = Dimensions.get("window");

const LoginNavigation = createStackNavigator(
  {
    ScreenLogin: { screen: FormLogin }
  },
  {
    headerMode: "none",
    transitionConfig: () => fromTop(500)
  }
);

/* const AuthLoadingNavigation = createStackNavigator(
  {
    AuthLoadingScreen: { screen: AuthLoading }
  },
  {
    headerMode: "none"
  }
); */

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
      //Auth: AuthLoadingNavigation
    },
    {
      initialRouteName: "Login"
    }
  )
);

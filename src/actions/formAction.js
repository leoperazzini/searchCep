import { AsyncStorage, Dimensions } from "react-native";

import { LOGIN } from "../consts/actions";

import { startSubmit, stopSubmit } from "redux-form";

import { Toast } from "native-base";

const dismissKeyboard = require("dismissKeyboard");

export const login = data_form => (dispatch, getState) => {
  var error = { erro_servidor: null, erro_login: null };

  dispatch(startSubmit("formLogin"));

  dismissKeyboard();

  //alert(JSON.stringify(data_form));

  // try {
  //   let alertsAlreadyNotificated = await AsyncStorage.getItem(
  //     "alertsAlreadyNotificated"
  //   );

  //   alertsAlreadyNotificated = JSON.parse(alertsAlreadyNotificated);
  //   //console.log(alertsAlreadyNotificated);
  //   const response = await api().request({
  //     url: "/alert/recievelocationbydevice",
  //     method: "POST",
  //     data: {
  //       latitude: latitude,
  //       longitude: longitude,
  //       userIdOneSignal: userIdOneSignal,
  //       alertsAlreadyNotificated: alertsAlreadyNotificated
  //     }
  //   });

  //   AsyncStorage.setItem(
  //     "alertsAlreadyNotificated",
  //     JSON.stringify(response.data)
  //   );
  // } catch (err) {
  //   console.log("errors", err);
  // }

  // GOOGLE_MAPS_KEY=AIzaSyD7-u2fXJQ58t_8qswX1ZssssE_N9fE7IQ

  var access_token = "1";

  dispatch({ type: LOGIN, payload: access_token });
  dispatch(stopSubmit("formLogin", error));
};

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

  /* api
    .post("/login", data_form)
    .then(function(response) {
      error = response.data.error;
      access_token = response.data.access_token;
      token_type = response.data.token_type;

      if (error === undefined) {
        error = { email: null, password: null };
      }
    })
    .catch(function(err) {
      error = { erro_servidor: "Não foi possível conectar com o servidor." };
    })
    .finally(function() {
      if (
        access_token != undefined &&
        access_token != null &&
        access_token != ""
      ) {
        AsyncStorage.setItem("access_token", access_token);
        AsyncStorage.setItem("token_type", token_type);
      } else {
        if (error == "invalid_credentials") {
          Toast.show({
            text: "E-mail ou senha inválidos!",
            textStyle: { color: "white", textAlign: "center" },
            style: {
              backgroundColor: "#FF2929",
              borderRadius: 35,
              alignSelf: "center",
              width: width - 100,
              bottom: 20
            },
            duration: 5000,
            position: "bottom"
          });
          error = {};
        }
      }
    }); */
  var access_token = "1";

  dispatch({ type: LOGIN, payload: access_token });
  dispatch(stopSubmit("formLogin", error));
};

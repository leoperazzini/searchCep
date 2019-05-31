import AsyncStorage from "@react-native-community/async-storage";

import { LOGIN, CADASTRAR, SETUSERS } from "../consts/actions";

import { startSubmit, stopSubmit } from "redux-form";

import { Toast } from "native-base";

const dismissKeyboard = require("dismissKeyboard");

export const cadastrar = data_form => async (dispatch, getState) => {
  dispatch(startSubmit("formCadastrar"));

  dismissKeyboard();

  let users = await AsyncStorage.getItem("users");
  users = JSON.parse(users);

  if (users) {
    dispatch({ type: SETUSERS, payload: users });
  } else {
    dispatch({ type: SETUSERS, payload: [] });
  }

  const user = ({ username, email, password } = data_form);

  if (user.username && user.email && user.password) {
    const userLogin = users.find(function(item) {
      return item.username == user.username;
    });

    if (userLogin) {
      alert(`Usuário "${userLogin.username}" já cadastrado`);
    } else {
      dispatch({ type: CADASTRAR, payload: user });

      AsyncStorage.setItem(
        "users",
        JSON.stringify(getState().userReducer.users)
      );

      alert(`Usuário "${user.username}" cadastrado com sucesso`);
    }
  } else {
    if (!user.password) {
      alert("Atenção! Senha vazia");
    }
    if (!user.email) {
      alert("Atenção! E-mail vazio");
    }
    if (!user.username) {
      alert("Atenção! Usuário vazio");
    }
  }

  dispatch(stopSubmit("formCadastrar"));
};

export const login = data_form => async (dispatch, getState) => {
  dispatch(startSubmit("formLogin"));

  dismissKeyboard();

  let users = await AsyncStorage.getItem("users");
  users = JSON.parse(users);

  if (users) {
    dispatch({ type: SETUSERS, payload: users });
  } else {
    dispatch({ type: SETUSERS, payload: [] });
  }

  const user = ({ username, email, password } = data_form);

  if (user.username && user.password) {
    const userLogin = users.find(function(item) {
      return item.username == user.username;
    });
    if (userLogin && userLogin.password == user.password) {
      dispatch({ type: LOGIN, payload: true });
    } else {
      alert("Senha ou usuário incorretos");
    }
  } else {
    if (!user.password) {
      alert("Atenção! Senha vazia");
    }
    if (!user.username) {
      alert("Atenção! Usuário vazio");
    }
  }

  dispatch(stopSubmit("formLogin"));
};

export const logout = () => async (dispatch, getState) => {
  dispatch({ type: LOGIN, payload: false });
};

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

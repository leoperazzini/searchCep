/* import React from "react";

import api from "../services/api/index";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Loading from "../componentes/Loading";

import { getUserDataStorage } from "..//actions/userAction.js";

import { AsyncStorage } from "react-native";

class authLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  _redirect = async () => {
    let access_token = await AsyncStorage.getItem("access_token");
    let token_type = await AsyncStorage.getItem("token_type");
    let first_access = await AsyncStorage.getItem("first_access");

    if (
      access_token != undefined &&
      access_token != null &&
      access_token != ""
    ) {
      const response = await api.post(
        "/alert/logged",
        {},
        {
          headers: { Authorization: token_type + " " + access_token }
        }
      );

      if (response.status == 401) {
        AsyncStorage.setItem("access_token", "");
        AsyncStorage.setItem("token_type", "");

        access_token = "";
      }
    }

    if (
      access_token != undefined &&
      access_token != null &&
      access_token != ""
    ) {
      InitRoute = "Main";
    } else {
      InitRoute = first_access == "false" ? "Login" : "Tutorial";
    }

    this.props.navigation.navigate(InitRoute);
  };

  componentDidMount = async () => {
    this._redirect();
  };

  // Render any loading content that you like here
  render() {
    return <Loading />;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(authLogin);
 */

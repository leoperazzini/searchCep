import React from "react";

import { login } from "../../actions/loginAction.js";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";

import { Card, Button } from "react-native-paper";

import { reduxForm, Field, initialize } from "redux-form";
import InputRedux from "../formGeneric/inputRedux";

const { width, height } = Dimensions.get("window");

class formLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  render() {
    const { login, submitting, handleSubmit } = this.props;
    return (
      <ImageBackground style={[styles.backgroundImg]}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../img/logo.png")} style={styles.logo} />
          </View>

          <Card style={styles.cardBox}>
            <Card.Content>
              <View>
                <Field name="username" label="Usuário" component={InputRedux} />
                <Field
                  name="password"
                  secureTextEntry
                  label="Senha"
                  component={InputRedux}
                />
              </View>
              <View>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  color="#050913"
                  onPress={handleSubmit(login)}
                  loading={submitting}
                >
                  ENTRAR
                </Button>
                <Button
                  style={styles.buttons}
                  mode="contained"
                  color="#050913"
                  onPress={() => alert()}
                >
                  CADASTRAR
                </Button>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: { marginTop: 20, width: 150, height: 150 },
  buttons: { marginTop: 4, marginBottom: 4, padding: 8 },
  cardBox: {
    borderRadius: 0,
    padding: 30,
    margin: 20,
    backgroundColor: "#e0e3e5"
  },
  iconEye: {
    position: "absolute",
    marginTop: 110,
    marginLeft: 230,
    zIndex: 10
  },
  backgroundImg: {
    backgroundColor: "#2a5baa",
    width: "100%",
    height: "100%"
  }
});

const mapStateToProps = state => ({
  access_token: state.user.access_token
});

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

formLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(formLogin);

export default reduxForm({ form: "formLogin" })(formLogin);

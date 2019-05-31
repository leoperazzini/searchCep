import React from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";

import { logout } from "../actions/formAction";

import { IconButton, Text } from "react-native-paper";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CustomDrawerContentComponent extends React.Component {
  async componentDidMount() {}

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("MainScreen");
            this.props.navigation.closeDrawer();
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>
            Listar usuários
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ScreenSearchCEP");
            this.props.navigation.closeDrawer();
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>
            Buscar CEP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.logout();
            this.props.navigation.navigate("ScreenLogin");
          }}
        >
          <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: "25%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  userName: {
    fontSize: 20,
    fontWeight: "500"
  },
  exitButton: {
    marginTop: 10
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContentComponent);

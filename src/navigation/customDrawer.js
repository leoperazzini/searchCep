import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";

import { AsyncStorage } from "react-native";

import { Fab } from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

import { IconButton, Text } from "react-native-paper";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CustomDrawerContentComponent extends React.Component {
  async componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            borderBottomColor: "black",
            borderBottomWidth: 1,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <IconButton
              icon="person"
              color="white"
              size={30}
              style={{
                borderWidth: 1,
                borderColor: "white",
                borderStyle: "solid",
                width: "80%",
                height: "40%",
                borderWidth: 1,
                borderRadius: 100
              }}
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: "column"
            }}
          >
            <View
              style={{
                flex: 1
              }}
            />
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Leonardo Perazzini
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 15, marginTop: 10 }}>
                Credibilidade : 5
              </Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 3
          }}
        >
          <Text
            style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}
            onPress={() => alert()}
          >
            Meu perfil
          </Text>

          <Text
            style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}
            onPress={() => alert()}
          >
            Meus dados
          </Text>

          <Text
            style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}
            onPress={() => alert()}
          >
            Ajuda
          </Text>

          <Text
            style={{ fontSize: 20, marginTop: 20, marginLeft: 20 }}
            onPress={() => alert()}
          >
            Sair
          </Text>
        </View>
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

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContentComponent);

import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Fab
} from "native-base";

import { IconButton, ActivityIndicator } from "react-native-paper";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

class main extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    const { users } = this.props;
    return (
      <View style={{ borderRightWidth: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <IconButton
              icon="menu"
              color="black"
              size={35}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </View>

          <View
            style={{ flex: 9, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 20,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              Listar de Usuários
            </Text>
          </View>
        </View>

        <ScrollView>
          <List>
            {users.map((user, key) => (
              <ListItem key={key}>
                <Text>Username : {user.username} | </Text>
                <Text>E-mail : {user.email}</Text>
              </ListItem>
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //alignItems: 'center',
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  Content: {
    height: height,
    width: width
  }
});

const mapStateToProps = state => ({ users: state.userReducer.users });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main);

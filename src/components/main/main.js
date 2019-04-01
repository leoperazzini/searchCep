import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native";

import { Container, View, Fab } from "native-base";

import { Text, IconButton, ActivityIndicator } from "react-native-paper";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

class main extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <View style={{ borderRightWidth: 1 }}>
        <IconButton
          icon="menu"
          color="black"
          size={35}
          onPress={() => this.props.navigation.openDrawer()}
        />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(main);

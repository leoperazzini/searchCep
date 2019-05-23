import React, { PureComponent } from "react";

import { StyleSheet, View } from "react-native";

import {
  TextInput,
  HelperText,
  DarkTheme,
  IconButton
} from "react-native-paper";

export default class inputRedux extends PureComponent {
  state = {
    secureTextEntry: false,
    passIcon: "visibility",
    errorColor: "#050913"
  };

  showHide() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      passIcon:
        this.state.passIcon === "visibility" ? "visibility-off" : "visibility"
    });
  }

  componentDidUpdate() {
    const {
      meta: { error }
    } = this.props;
    if (error) {
      this.setState({ errorColor: "#B00020" });
    } else {
      this.setState({ errorColor: "#050913" });
    }
  }

  componentWillMount() {
    if (this.props.secureTextEntry) {
      this.setState({ secureTextEntry: true });
    }
  }

  render() {
    const {
      input: { onChange, ...restInput },
      meta: { touched, error },
      label = null,
      style = {}
    } = this.props;

    const hasError = (error || false) !== false;

    return (
      <View style={styles.inputTextContainer}>
        <View style={styles.inputTextWrapper}>
          <View
            style={{
              flex: 1
            }}
          >
            <TextInput
              mode="outlined"
              onChangeText={onChange}
              error={hasError}
              label={label}
              {...restInput}
              secureTextEntry={this.state.secureTextEntry}
              style={[style, {}]}
              theme={theme}
            />
          </View>

          <HelperText type="error" visible={hasError}>
            {error && error.join("\n")}
          </HelperText>
        </View>
      </View>
    );
  }
}

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#050913",
    background: "#FFF",
    text: "#050913",
    placeholder: "#050913",
    error: "#FF2929"
  }
};

const styles = StyleSheet.create({
  iconRight: {
    position: "absolute",
    marginLeft: "80%",
    marginTop: "3%",
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  inputTextWrapper: {
    position: "relative"
  }
});

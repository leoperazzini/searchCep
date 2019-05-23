import React, { Component } from "react";

import allReducers from "./reducers/index.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import Login from "./components/form/formLogin";
import Navigation from "./navigation/navigation";

import { Root } from "native-base";

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <Navigation />
        </Root>
      </Provider>
    );
  }
}

export default App;

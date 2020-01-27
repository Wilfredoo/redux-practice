import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Counter from "./src/CounterApp";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER":
      return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

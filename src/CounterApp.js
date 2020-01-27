import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { render } from "react-dom";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity>
            <Text>Increase</Text>
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <Text>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
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

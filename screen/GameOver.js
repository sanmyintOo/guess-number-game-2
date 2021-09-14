import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GameOver = (props) => {
    return (
      <View style={styles.container}>
        <Text>The Game is Over!</Text>
        <Text>Number of rounds: {props.roundNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Pressable onPress={props.onRestart}>
          <Text>NEW GAME</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOver;
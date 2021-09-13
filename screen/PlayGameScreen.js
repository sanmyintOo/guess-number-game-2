import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const PlayGameScreen = (props) => {
  const generateNumber = (min, max, excluded) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rdnNumber = Math.random() * (max - min) + min;

    if (rdnNumber === excluded) {
      generateNumber(min, max, excluded);
    } else {
      return parseInt(rdnNumber, 10);
    }
  };

  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 100, props.userGuess)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const btnPressHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userGuess) ||
      (direction === "greater" && currentGuess > props.userGuess)
    ) {
      Alert.alert("Don't lie!", "Your answer is not correct", [
        {
          text: "Okay",
          style: "cancel",
        },
      ]);
    } else {
      if (direction === "lower") {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }

      setCurrentGuess(
        generateNumber(currentLow.current, currentHigh.current, props.userGuess)
      );
    }
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Choice</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <Pressable onPress={btnPressHandler.bind(this, "lower")}>
          <Text>LOWER</Text>
        </Pressable>
        <Pressable onPress={btnPressHandler.bind(this, "greater")}>
          <Text>GREATER</Text>
        </Pressable>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default PlayGameScreen;

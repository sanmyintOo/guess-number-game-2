import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import Gamescreen from "./screen/Gamescreen";
import PlayGameScreen from "./screen/PlayGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <Gamescreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <PlayGameScreen userGuess={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

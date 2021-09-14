import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import Header from "./components/Header";
import Gamescreen from "./screen/Gamescreen";
import PlayGameScreen from "./screen/PlayGameScreen";
import GameOver from "./screen/GameOver";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "Urbanist": require("./assets/font/Urbanist.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onGameOverHandler = (rounds) => {
    setGuessRounds(rounds);
  };

  const restartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let content = <Gamescreen onStartGame={startGameHandler} />;
  
  if (userNumber && guessRounds <= 0) {
    content = (
      <PlayGameScreen userGuess={userNumber} onGameOver={onGameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver roundNumber={guessRounds} userNumber={userNumber} onRestart={restartHandler} />
    );
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

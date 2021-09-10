import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constant/Colors";
import Input from "../components/Input";

const Gamescreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resettHandler = () => {
      setEnteredValue("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Pressable>
              <Text style={styles.btnReset} onPress={resettHandler}>
                Reset
              </Text>
            </Pressable>
            <Pressable>
              <Text style={styles.btnConfirm}>Confirm</Text>
            </Pressable>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingBottom: 10,
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  button: {
    width: 100,
  },

  input: {
    width: 50,
    textAlign: "center",
  },

  btnReset: {
      color: Colors.accents
  },

  btnConfirm: {
      color: Colors.primary
  },
});

export default Gamescreen;

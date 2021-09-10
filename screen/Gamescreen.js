import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constant/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const Gamescreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resettHandler = () => {
    setEnteredValue("");
    setConfirm(false);
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resettHandler },
      ]);
      return;
    }

    setConfirm(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryConatiner}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Pressable onPress={() => props.onStartGame(selectedNumber)}>
          <Text>START GAME</Text>
        </Pressable>
      </Card>
    );
    Keyboard.dismiss();
  }

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
            <Pressable onPress={resettHandler}>
              <Text style={styles.btnReset}>Reset</Text>
            </Pressable>
            <Pressable onPress={confirmInputHandler}>
              <Text style={styles.btnConfirm}>Confirm</Text>
            </Pressable>
          </View>
        </Card>
        {confirmedOutput}
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
    color: Colors.accents,
  },

  btnConfirm: {
    color: Colors.primary,
  },

  summaryConatiner: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default Gamescreen;

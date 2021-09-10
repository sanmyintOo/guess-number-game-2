import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Gamescreen from './screen/Gamescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      <Gamescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

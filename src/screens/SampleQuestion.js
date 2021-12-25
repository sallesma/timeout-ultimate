import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Question from '../components/Question';
import { questions } from '../../data/questions';

export default (props) => {
  const question = questions[Math.floor(Math.random() * questions.length)];

  return (
    <View style={styles.container}>
      <Question question={question} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

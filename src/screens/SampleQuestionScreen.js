import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';

import Question from '../components/Question';
import questions from '../../data';

export default (props) => {
  const question = questions[Math.floor(Math.random() * questions.length)];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Question question={question} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 50,
  },
});

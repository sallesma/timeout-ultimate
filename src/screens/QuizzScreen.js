import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import Question from '../components/Question';
import Report from '../components/Report';
import questions from '../../data';
import { Levels } from '../utils/config'

// Taken from https://stackoverflow.com/a/19270021
function getRandomElementsFromArray(arr, n) {
  let number = Math.min(n, arr.length);
  var result = new Array(number),
    len = arr.length,
    taken = new Array(len);
  while (number--) {
    var x = Math.floor(Math.random() * len);
    result[number] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default (props) => {
  const { number, time, level } = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `${current} / ${number}`,
      headerRight: () => (
        <Text style={{color: 'white'}}>{rightAnswersCount} bonnes réponses</Text>
      ),
    });
  });

  const filteredQuestions = questions.filter(question => level === Levels.ANY || level === question.level);

  const [selectedQuestions, _setSelectedQuestions] = useState(
    Number.isInteger(number) ? getRandomElementsFromArray(filteredQuestions, number) : filteredQuestions
  );
  const [current, setCurrent] = useState(1);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [canMoveForward, setCanMoveForward] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const onSuccess = () => {
    setRightAnswersCount(rightAnswersCount + 1);
    setCanMoveForward(true)
  }

  const onFailure = () => {
    setCanMoveForward(true)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {!showReport && (
        <View style={styles.question}>
          <Question
            question={selectedQuestions[current - 1]}
            onSuccess={onSuccess}
            onFailure={onFailure}
            time={time}
          />
        </View>
      )}
      {canMoveForward && (
        <Button title="Question suivante" onPress={() => {
          if (current === number) {
            setShowReport(true);
          }
          else {
            setCurrent(current + 1);
          }
          setCanMoveForward(false);
        }} />
      )}
      {showReport && (
        <Report rightAnswersCount={rightAnswersCount} quizzLength={number} navigation={props.navigation} />
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 64,
  },
  question: {
    marginBottom: 16,
  },
});

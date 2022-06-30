import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import Question from '../components/Question';
import Report from '../components/Report';
import questions from '../../data/questions';
import { Levels } from '../utils/config';

// Taken from https://stackoverflow.com/a/19270021
function getRandomElementsFromArray(arr, n) {
  let number = Math.min(n, arr.length);
  let result = new Array(number),
    len = arr.length,
    taken = new Array(len);
  while (number--) {
    const x = Math.floor(Math.random() * len);
    result[number] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default (props) => {
  const { number, time, level, checkedCategories } = props.route.params;

  const filteredQuestions = questions.filter(
    (question) =>
      (level === Levels.ANY || level === question.level) &&
      (checkedCategories.length === 0 || checkedCategories.includes(question.category)),
  );

  const [selectedQuestions, _setSelectedQuestions] = useState(getRandomElementsFromArray(filteredQuestions, number));
  const [current, setCurrent] = useState(1);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [canMoveForward, setCanMoveForward] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const onSuccess = () => {
    setRightAnswersCount(rightAnswersCount + 1);
    setCanMoveForward(true);
  };

  const onFailure = (question, checked) => {
    setCanMoveForward(true);
    setErrors(errors.concat({ question, checked }));
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `${current} / ${selectedQuestions.length}`,
      headerRight: () => <Text style={styles.headerRight}>{rightAnswersCount} bonnes réponses</Text>,
    });
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {!showReport && (
        <View style={styles.question}>
          <Question question={selectedQuestions[current - 1]} onSuccess={onSuccess} onFailure={onFailure} time={time} />
        </View>
      )}
      {canMoveForward && (
        <Button
          title="Question suivante"
          onPress={() => {
            if (current === selectedQuestions.length) {
              setShowReport(true);
            } else {
              setCurrent(current + 1);
            }
            setCanMoveForward(false);
          }}
        />
      )}
      {showReport && (
        <Report
          rightAnswersCount={rightAnswersCount}
          quizzLength={selectedQuestions.length}
          errors={errors}
          navigation={props.navigation}
        />
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerRight: {
    color: 'white',
    marginLeft: 16,
  },
  contentContainer: {
    paddingBottom: 64,
  },
  question: {
    marginBottom: 16,
  },
});

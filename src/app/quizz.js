import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useFocusEffect, useNavigation, useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import { Button } from 'react-native-elements';

import Question from '../components/Question';
import Report from '../components/Report';
import questions from '../../data/questions';
import { Levels } from '../utils/config';
import I18n from '../utils/i18n';

// Taken from https://stackoverflow.com/a/19270021
function getRandomElementsFromArray(arr, n) {
  let number = Math.min(n, arr.length);
  const result = new Array(number);
  let length = arr.length;
  const taken = new Array(length);
  while (number--) {
    const x = Math.floor(Math.random() * length);
    result[number] = arr[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }
  return result;
}

export default (props) => {
  const navigation = useNavigation();
  const { number, time, level, checkedCategories } = useLocalSearchParams();

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

  useFocusEffect(() => {
    navigation.setOptions({
      title: `${current} / ${selectedQuestions.length}`,
      headerRight: () => (
        <Text style={styles.headerRight}>{I18n.t('quizzScreen.headerRight', { count: rightAnswersCount })}</Text>
      ),
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
          title={I18n.t('quizzScreen.nextQuestion')}
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

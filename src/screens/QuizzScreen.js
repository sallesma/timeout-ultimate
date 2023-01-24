import React, { useState, useLayoutEffect, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Question from '../components/Question';
import Report from '../components/Report';
import { Levels } from '../utils/config';
import I18n from '../utils/i18n';
import getQuestions from '../../data/questions';

function getRandomElementsFromArray(arr, n) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

export default (props) => {
  const { number, time, level, checkedCategories } = props.route.params;
  const [current, setCurrent] = useState(1);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [canMoveForward, setCanMoveForward] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [questions, setQuestions] = useState([]);
  const filteredQuestions = useMemo(
    () =>
      questions.filter(
        (q) =>
          (level === Levels.ANY || level === q.level) &&
          (checkedCategories.length === 0 || checkedCategories.includes(q.category)),
      ),
    [checkedCategories, level, questions],
  );
  const selectedQuestions = useMemo(
    () => getRandomElementsFromArray(filteredQuestions, number),
    [filteredQuestions, number],
  );

  useEffect(() => {
    (async function loadResults() {
      setQuestions(await getQuestions());
    })();
  }, []);

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
      headerRight: () => (
        <Text style={styles.headerRight}>{I18n.t('quizzScreen.headerRight', { count: rightAnswersCount })}</Text>
      ),
    });
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {selectedQuestions.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <View>
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
        </View>
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

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CheckBox, Button, LinearProgress } from 'react-native-elements';

import theme from '../utils/theme.js';
import Feedback from './questions/Feedback.js';
import DisplayedRule from './questions/DisplayedRule.js';

const colors = ['#cddff3', '#F4C8A2', '#f8f99c', '#e5c9e5'];

export default ({ question, onSuccess, onFailure, time }) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [checked, setChecked] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    setChecked([]);
    setResult(undefined);
  }, [question.question + question.image]);

  const onValidate = () => {
    if (currentTime < 1) setCurrentTime(1);

    const answerIsCorrect = JSON.stringify(checked.sort()) === JSON.stringify(question.correctAnswers.sort());
    setResult(answerIsCorrect);
    if (answerIsCorrect) {
      if (onSuccess) onSuccess();
    } else {
      if (onFailure) onFailure(question, checked);
    }
  };

  const onCheck = (choiceKey) => {
    const newChecked = checked.includes(choiceKey)
      ? checked.filter((v) => v !== choiceKey)
      : checked.concat([choiceKey]);
    setChecked(newChecked);
  };

  const showResult = result !== undefined;

  if (time) {
    // Restart timer on new question
    React.useEffect(() => {
      setCurrentTime(0);
    }, [question]);

    React.useEffect(() => {
      let subs = true;
      if (currentTime < 1) {
        setTimeout(() => {
          if (subs) {
            setCurrentTime(currentTime + 1 / time);
          }
        }, 1000);
      }
      if (currentTime > 1) {
        onValidate();
      }
      return () => (subs = false);
    }, [currentTime]);
  }

  return (
    <View>
      {question.image && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={question.image} />
        </View>
      )}
      <Text style={styles.question}>{question.question}</Text>
      <View>
        {Object.keys(question.answerChoices).map((answerChoiceKey, index) => (
          <CheckBox
            key={answerChoiceKey}
            checked={checked.includes(answerChoiceKey)}
            disabled={showResult}
            onPress={() => onCheck(answerChoiceKey)}
            title={`${answerChoiceKey}. ${question.answerChoices[answerChoiceKey]}`}
            containerStyle={[
              styles.checkbox,
              { backgroundColor: colors[index] },
              showResult && question.correctAnswers.includes(answerChoiceKey) && styles.correctAnswer,
            ]}
            textStyle={styles.checkboxText}
            uncheckedColor="grey"
          />
        ))}
      </View>
      {time && !showResult && (
        <LinearProgress
          style={{ marginVertical: 10 }}
          value={currentTime}
          variant="determinate"
          color={theme.MAIN_COLOR}
          trackColor={theme.MAIN_COLOR_LIGHT}
        />
      )}
      {!showResult && <Button title="Valider" onPress={onValidate} disabled={showResult} containerStyle={styles.cta} />}
      {showResult && (
        <View style={styles.result}>
          {result ? (
            <Text style={styles.correct}>Bonne réponse !</Text>
          ) : (
            <Text style={styles.wrong}>Mauvaise réponse...</Text>
          )}
          <Text>{question.explanation}</Text>
          <DisplayedRule ruleNumbers={question.rules} />
          <Feedback question={question} style={styles.reportIcon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    height: 100,
    marginBottom: 16,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
  },
  question: {
    fontSize: theme.FONT_SIZE_M,
  },
  checkbox: {
    borderRadius: 8,
    padding: 16,
  },
  checkboxText: {
    fontSize: theme.FONT_SIZE_M,
  },
  correctAnswer: {
    borderColor: theme.RIGHT_COLOR,
    borderWidth: 3,
  },
  cta: {
    marginTop: 8,
  },
  result: {
    padding: 16,
    backgroundColor: theme.MAIN_COLOR_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    borderRadius: 4,
  },
  reportIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  correct: {
    color: theme.RIGHT_COLOR,
    fontWeight: 'bold',
  },
  wrong: {
    color: theme.WRONG_COLOR,
  },
});

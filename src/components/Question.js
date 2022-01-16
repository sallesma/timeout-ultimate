import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button, LinearProgress } from 'react-native-elements';

import theme from '../utils/theme.js';
import QuestionFeedback from './QuestionFeedback.js';

const colors = [
  '#cddff3',
  '#F4C8A2',
  '#f8f99c',
  '#e5c9e5',
];

export default ({question, onSuccess, onFailure, time}) => {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [checked, setChecked] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    setChecked([]);
    setResult(undefined);
  }, [question.question]);

  const onValidate = () => {
    if (currentTime < 1) setCurrentTime(1);

    const answerIsCorrect = JSON.stringify(checked.sort()) == JSON.stringify(question.correctAnswers.sort());
    setResult(answerIsCorrect);
    if (answerIsCorrect) {
      if (onSuccess) onSuccess();
    } else {
      if (onFailure) onFailure();
    }
  }

  const onCheck = (choiceKey) => {
    const newChecked = checked.includes(choiceKey)
      ? checked.filter((v) => v!== choiceKey)
      : checked.concat([choiceKey]);
    setChecked(newChecked);
  }

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
            setCurrentTime(currentTime + (1 / time));
          }
        }, 1000);
      }
      if (currentTime > 1) {
        onValidate();
      }
      return () => subs = false;
    }, [currentTime]);
  }

  return (
    <View>
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.choicesArea}>
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
              showResult && question.correctAnswers.includes(answerChoiceKey) && styles.correctAnswer
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
      {!showResult && <Button title="Valider" onPress={onValidate} disabled={showResult} />}
      {showResult && (
        <View style={styles.result}>
          {result ? (
            <Text style={styles.correct}>Bonne réponse !</Text>
          ) : (
            <Text style={styles.wrong}>Mauvaise réponse...</Text>
          )}
          <Text>{question.explanation}</Text>
          <QuestionFeedback question={question} style={styles.reportIcon} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: theme.FONT_SIZE_M,
  },
  choicesArea: {
    paddingVertical: 16,
  },
  checkbox: {
    borderRadius: 8,
    padding: 16,
  },
  checkboxText: {
    fontSize: theme.FONT_SIZE_M,
  },
  correctAnswer: {
    borderColor: '#6AA84F',
    borderWidth: 3,
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
    color: '#6AA84F',
    fontWeight: 'bold',
  },
  wrong: {
    color: '#E30000',
  },
});

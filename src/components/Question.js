import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button, LinearProgress } from 'react-native-elements';

import theme from '../utils/theme.js';

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
            setCurrentTime(currentTime + (time / 100));
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
        {Object.keys(question.answerChoices).map((answerChoiceKey) => (
          <CheckBox
            key={answerChoiceKey}
            checked={checked.includes(answerChoiceKey)}
            disabled={showResult}
            onPress={() => onCheck(answerChoiceKey)}
            title={`${answerChoiceKey}. ${question.answerChoices[answerChoiceKey]}`}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        ))}
      </View>
      {time && (
        <LinearProgress
          style={{ marginVertical: 10 }}
          value={currentTime}
          variant="determinate"
          color={theme.MAIN_COLOR}
          trackColor={theme.MAIN_COLOR_LIGHT}
        />
      )}
      <Button title="Valider" onPress={onValidate} disabled={showResult} />
      {showResult && (
        <View style={styles.result}>
          <Text>La bonne réponse est :</Text>
          {question.correctAnswers.map((correctAnswerKey) => (
            <Text key={correctAnswerKey}>{correctAnswerKey}. {question.answerChoices[correctAnswerKey]}</Text>
          ))}
          {result ? (
            <Text style={styles.correct}>Bonne réponse !</Text>
          ) : (
            <Text style={styles.wrong}>Mauvaise réponse...</Text>
          )}
          <Text>{question.explanation}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  choicesArea: {
    paddingVertical: 20,
  },
  result: {
    marginTop: 20,
    padding: 20,
    backgroundColor: theme.MAIN_COLOR_LIGHT,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    borderRadius: 4,
  },
  correct: {
    color: 'green',
  },
  wrong: {
    color: 'red',
  },
});

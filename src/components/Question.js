import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

export default ({question, onSuccess, onFailure}) => {
  const [checked, setChecked] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    setChecked([]);
    setResult(undefined);
  }, [question.question]);

  const onValidate = () => {
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
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
  },
  choicesArea: {
    paddingVertical: 20,
  },
  result: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fafafa',
    borderColor: '#eee',
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

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

export default (props) => {
  const question = props.route.params.question;

  const [checked, setChecked] = useState([]);
  const [showResult, setShowResult] = useState(false);


  const onValidate = () => {
    setShowResult(true);
  }

  const onCheck = (choiceKey) => {
    const newChecked = checked.includes(choiceKey)
      ? checked.filter((v) => v!== choiceKey)
      : checked.concat([choiceKey]);
    setChecked(newChecked);
  }

  const answerIsCorrect = JSON.stringify(checked.sort()) == JSON.stringify(question.correctAnswers.sort());

  return (
    <View style={styles.container}>
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
          {answerIsCorrect ? (
            <Text style={styles.correct}>Bonne réponse !</Text>
          ) : (
            <Text style={styles.wrong}>Mauvaise réponse...</Text>
          )}
        </View>
      )}
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

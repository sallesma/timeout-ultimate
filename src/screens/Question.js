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

  const onCheck = (choice) => {
    const newChecked = checked.includes(choice)
      ? checked.filter((v) => v!== choice)
      : checked.concat([choice]);
    setChecked(newChecked);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.choicesArea}>
        {question.answerChoices.map((answerChoice, index) => (
          <CheckBox
            key={index}
            checked={checked.includes(answerChoice)}
            onPress={() => onCheck(answerChoice)}
            title={answerChoice}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        ))}
      </View>
      <Button title="Valider" onPress={onValidate}/>
      {showResult && (
        <View style={styles.result}>
          <Text>La bonne réponse est :</Text>
          {question.correctAnswers.map((correctAnswer) => (
            <Text key={correctAnswer}>{question.answerChoices[correctAnswer]}</Text>
          ))}
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
});

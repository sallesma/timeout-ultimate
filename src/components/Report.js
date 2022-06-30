import React from 'react';
import { StyleSheet, Text, View, Share } from 'react-native';
import { Button } from 'react-native-elements';

import { saveQuizzResult } from '../utils/history';
import theme from '../utils/theme.js';
import ReportError from './questions/ReportError';

export default ({ navigation, rightAnswersCount, quizzLength, errors }) => {
  let message;
  if (rightAnswersCount === quizzLength) {
    message = 'Bravo !';
  } else if (rightAnswersCount / quizzLength > 0.5) {
    message = 'Pas si mal, encore un effort !';
  } else if (rightAnswersCount / quizzLength > 0.2) {
    message = 'Il y a encore du boulot';
  } else {
    message = "C'est pas top...";
  }

  const share = async () => {
    try {
      await Share.share({
        message: `J'ai obtenu ${rightAnswersCount} / ${quizzLength} sur un quizz sur les règles de l'ultimate sur Timeout Ultimate`,
        title: "Règles de l'ultimate",
      });
    } catch (error) {
      console.log('Error sharing result', error);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Bilan</Text>
      </View>
      <Text>
        {rightAnswersCount} bonnes réponses pour {quizzLength} questions
      </Text>
      <Text>Mon commentaire :</Text>
      <View style={styles.result}>
        <Text>{message}</Text>
      </View>
      <Button containerStyle={styles.buttonContainer} title="Partager mon résultat" onPress={share} type="outline" />
      <Button
        containerStyle={styles.buttonContainer}
        title="Retourner à l'accueil"
        onPress={() => {
          saveQuizzResult({ rightAnswersCount, quizzLength, createdAt: new Date() });
          navigation.navigate('HomeScreen');
        }}
      />
      {errors.length > 0 && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Détail des erreurs</Text>
          </View>
          {errors.map((error, index) => (
            <ReportError key={index} question={error.question} checked={error.checked} />
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: theme.FONT_SIZE_XL,
  },
  result: {
    marginVertical: 8,
    marginLeft: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

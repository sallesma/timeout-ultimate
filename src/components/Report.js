import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default ({navigation, rightAnswersCount, quizzLength}) => {
  let message;
  if(rightAnswersCount === quizzLength){
    message = 'Bravo !';
  } else if (rightAnswersCount / quizzLength > 0.5) {
    message = 'Pas si mal, encore un effort !';
  } else if (rightAnswersCount / quizzLength > 0.2) {
    message = 'Il y a encore du boulot';
  } else {
    message = "C'est pas top...";
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.report}>Bilan</Text>
      </View>
      <Text>{rightAnswersCount} bonnes réponses pour {quizzLength} questions</Text>
      <Text>Mon commentaire :</Text>
      <View style={styles.result}>
        <Text>{message}</Text>
      </View>
      <Button containerStyle={styles.buttonContainer} title="Retourner à l'accueil" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  report: {
    fontSize: 24,
  },
  header: {
    paddingBottom: 10,
  },
  result: {
    marginVertical: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

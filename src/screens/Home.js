import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import theme from '../utils/theme.js';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur cette super appli pour apprendre les règles !</Text>
      <Button containerStyle={styles.button} title="Répondre à une question" onPress={() => props.navigation.navigate('SampleQuestionScreen')} />
      <Button containerStyle={styles.button} title="Quizz (10 questions)" onPress={() => props.navigation.navigate('QuizzScreen', { quizzLength: 10 })} />
      <Button containerStyle={styles.button} title="Historique des quizz" onPress={() => props.navigation.navigate('HistoryScreen')} />
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
  welcomeText: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 60,
  },
  button: {
    marginBottom: 20,
  }
});

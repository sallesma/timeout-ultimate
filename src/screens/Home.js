import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur cette super appli pour apprendre les règles !</Text>
      <Button containerStyle={styles.button} title="Répondre à une question" onPress={() => props.navigation.navigate('SampleQuestionScreen')} />
      <Button containerStyle={styles.button} title="Quizz (10 questions)" onPress={() => props.navigation.navigate('QuizzScreen')} />
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
    fontSize: 20,
    marginBottom: 60,
  },
  button: {
    marginBottom: 20,
  }
});

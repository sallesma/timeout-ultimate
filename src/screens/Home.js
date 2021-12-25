import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { questions } from '../../data/questions';

export default (props) => {
  const onQuestionPress = () => {
    const question = questions[0];

    props.navigation.navigate('QuestionScreen', { question });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur cette super appli pour apprendre les règles !</Text>
      <Button title="Répondre à une question" onPress={onQuestionPress}/>
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
});

import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../utils/theme.js';
import questions from '../../data';

export default (props) => {
  useLayoutEffect(() =>
    props.navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => props.navigation.navigate('AboutScreen')}>
          <MaterialCommunityIcons name="information-outline" style={styles.icon} />
        </Pressable>
      ),
    }),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{questions.length} questions t'attendent pour apprendre les règles de l'ultimate !</Text>
      <Button containerStyle={styles.button} title="Jouer" onPress={() => props.navigation.navigate('OptionsScreen')} />
      <Button containerStyle={styles.button} title="Historique des quizz" onPress={() => props.navigation.navigate('HistoryScreen')} />
      <Button containerStyle={styles.button} title="Règlement" onPress={() => props.navigation.navigate('RulesScreen')} />
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
  icon: {
    fontSize: 28,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 60,
  },
  button: {
    marginBottom: 20,
  }
});

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
      <Text style={styles.welcomeText}><Text style={styles.emphasis}>{questions.length}</Text> questions t'attendent pour apprendre les règles de l'ultimate !</Text>
      <Button containerStyle={styles.button} titleStyle={styles.mainButtonText} title="Jouer" onPress={() => props.navigation.navigate('OptionsScreen')} />
      <Button containerStyle={styles.button} title="Historique" onPress={() => props.navigation.navigate('HistoryScreen')} />
      <Button containerStyle={styles.button} title="Règlement" onPress={() => props.navigation.navigate('RulesScreen')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  icon: {
    fontSize: 28,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  welcomeText: {
    fontSize: theme.FONT_SIZE_L,
    marginBottom: 64,
    textAlign: 'center',
  },
  emphasis: {
    color: theme.MAIN_COLOR,
    fontSize: theme.FONT_SIZE_XL,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 16,
  },
  mainButtonText: {
    fontSize: theme.FONT_SIZE_XL,
  },
});

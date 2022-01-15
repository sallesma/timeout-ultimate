import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import theme from '../utils/theme.js';
import questions from '../../data';
import { Levels } from '../utils/config';

export default (props) => {
  const [number, setNumber] = useState(Infinity);
  const [time, setTime] = useState(null);
  const [level, setLevel] = useState(Levels.EASY);

  const startQuizz = () => {
    props.navigation.navigate('QuizzScreen', { number, time, level })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nombre de questions</Text>
      <View style={styles.options}>
        <Button type={number === 5 ? 'solid' : 'outline'} containerStyle={styles.button} title="5" onPress={() => setNumber(5)} />
        <Button type={number === 10 ? 'solid' : 'outline'} containerStyle={styles.button} title="10" onPress={() => setNumber(10)} />
        <Button type={number === Infinity ? 'solid' : 'outline'} containerStyle={styles.button} title="Infini" onPress={() => setNumber(Infinity)} />
      </View>
      <Text style={styles.header}>Temps par question</Text>
      <View style={styles.options}>
        <Button type={time === 10 ? 'solid' : 'outline'} containerStyle={styles.button} title="10 sec" onPress={() => setTime(10)} />
        <Button type={time === 60 ? 'solid' : 'outline'} containerStyle={styles.button} title="1 min" onPress={() => setTime(60)} />
        <Button type={time === null ? 'solid' : 'outline'} containerStyle={styles.button} title="Aucun" onPress={() => setTime(null)} />
      </View>
      <Text style={styles.header}>Niveau</Text>
      <View style={styles.options}>
        <Button type={level === Levels.EASY ? 'solid' : 'outline'} containerStyle={styles.button} title="Facile" onPress={() => setLevel(Levels.EASY)} />
        <Button type={level === Levels.MIDDLE ? 'solid' : 'outline'} containerStyle={styles.button} title="Moyen" onPress={() => setLevel(Levels.MIDDLE)} />
        <Button type={level === Levels.DIFFICULT ? 'solid' : 'outline'} containerStyle={styles.button} title="Difficile" onPress={() => setLevel(Levels.DIFFICULT)} />
        <Button type={level === null ? 'solid' : 'outline'} containerStyle={styles.button} title="Tous" onPress={() => setLevel(null)} />
      </View>

      <View style={styles.centered}>
        <Button containerStyle={styles.cta} title="JOUER" onPress={startQuizz} type="solid" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    margin: 8,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    margin: 8,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cta: {
    marginTop: 16,
    width: '33%',
  },
});

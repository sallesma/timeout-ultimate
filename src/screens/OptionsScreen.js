import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from 'react-native-elements';

import theme from '../utils/theme.js';
import questions from '../../data/questions';
import { Levels } from '../utils/config';

export default (props) => {
  const [number, setNumber] = useState(10);
  const [time, setTime] = useState(30);
  const [level, setLevel] = useState(Levels.ANY);

  const startQuizz = () => {
    props.navigation.navigate('QuizzScreen', { number, time, level })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nombre de questions</Text>
      <View style={styles.options}>
        <Button type={number === 5 ? 'solid' : 'outline'} containerStyle={styles.button} title="5" onPress={() => setNumber(5)} />
        <Button type={number === 10 ? 'solid' : 'outline'} containerStyle={styles.button} title="10" onPress={() => setNumber(10)} />
        <Button type={number === 30 ? 'solid' : 'outline'} containerStyle={styles.button} title="30" onPress={() => setNumber(30)} />
      </View>
      <Text style={styles.header}>Temps par question</Text>
      <View style={styles.options}>
        <Button type={time === 30 ? 'solid' : 'outline'} containerStyle={styles.button} title="30 sec" onPress={() => setTime(30)} />
        <Button type={time === 120 ? 'solid' : 'outline'} containerStyle={styles.button} title="2 min" onPress={() => setTime(120)} />
        <Button type={time === null ? 'solid' : 'outline'} containerStyle={styles.button} title="Aucun" onPress={() => setTime(null)} />
      </View>
      <Text style={styles.header}>Niveau</Text>
      <View style={styles.options}>
        <Button type={level === Levels.EASY ? 'solid' : 'outline'} containerStyle={[styles.button, styles.wrapped]} title="Facile" onPress={() => setLevel(Levels.EASY)} />
        <Button type={level === Levels.MIDDLE ? 'solid' : 'outline'} containerStyle={[styles.button, styles.wrapped]} title="Moyen" onPress={() => setLevel(Levels.MIDDLE)} />
        <Button type={level === Levels.DIFFICULT ? 'solid' : 'outline'} containerStyle={[styles.button, styles.wrapped]} title="Difficile" onPress={() => setLevel(Levels.DIFFICULT)} />
        <Button type={level === Levels.ANY ? 'solid' : 'outline'} containerStyle={[styles.button, styles.wrapped]} title="Tous" onPress={() => setLevel(Levels.ANY)} />
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
    padding: 16,
  },
  header: {
    margin: 8,
    fontSize: theme.FONT_SIZE_M,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    margin: 8,
    flexBasis: '25%',
  },
  wrapped: {
    flexBasis: '40%',
  },
  centered: {
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.MAIN_COLOR,
  },
  cta: {
    marginVertical: 32,
    width: '33%',
  },
});

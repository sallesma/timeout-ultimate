import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';

import theme from '../utils/theme.js';
import questions from '../../data/questions';
import { Levels, Categories } from '../utils/config';
import I18n from '../utils/i18n';

export default (props) => {
  const [seeMore, setSeeMore] = useState(false);
  const [number, setNumber] = useState(10);
  const [time, setTime] = useState(30);
  const [level, setLevel] = useState(Levels.ANY);
  const [checkedCategories, setCheckedCategories] = useState([]);

  const onCheck = (category) => {
    const newCheckedCategories = checkedCategories.includes(category)
      ? checkedCategories.filter((v) => v !== category)
      : checkedCategories.concat([category]);
    setCheckedCategories(newCheckedCategories);
  };

  const startQuizz = () => {
    props.navigation.navigate('QuizzScreen', { number, time, level, checkedCategories });
  };

  const countByCategory = {};
  questions.forEach((question) => (countByCategory[question.category] = (countByCategory[question.category] || 0) + 1));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{I18n.t('optionsScreen.countHeader')}</Text>
      <View style={styles.options}>
        <Button mode={number === 5 ? 'contained' : 'outlined'} style={styles.button} onPress={() => setNumber(5)}>
          5
        </Button>
        <Button mode={number === 10 ? 'contained' : 'outlined'} style={styles.button} onPress={() => setNumber(10)}>
          10
        </Button>
        <Button mode={number === 30 ? 'contained' : 'outlined'} style={styles.button} onPress={() => setNumber(30)}>
          30
        </Button>
      </View>
      <Text style={styles.header}>{I18n.t('optionsScreen.timeHeader')}</Text>
      <View style={styles.options}>
        <Button mode={time === 30 ? 'contained' : 'outlined'} style={styles.button} onPress={() => setTime(30)}>
          {I18n.t('optionsScreen.shortTime')}
        </Button>
        <Button mode={time === 120 ? 'contained' : 'outlined'} style={styles.button} onPress={() => setTime(120)}>
          {I18n.t('optionsScreen.longTime')}
        </Button>
        <Button mode={time === null ? 'contained' : 'outlined'} style={styles.button} onPress={() => setTime(null)}>
          {I18n.t('optionsScreen.noTime')}
        </Button>
      </View>
      <Text style={styles.header}>{I18n.t('optionsScreen.levelHeader')}</Text>
      <View style={styles.options}>
        <Button
          mode={level === Levels.EASY ? 'contained' : 'outlined'}
          style={[styles.button, styles.wrapped]}
          onPress={() => setLevel(Levels.EASY)}
        >
          {I18n.t(`config.levels.EASY`)}
        </Button>
        <Button
          mode={level === Levels.MIDDLE ? 'contained' : 'outlined'}
          style={[styles.button, styles.wrapped]}
          onPress={() => setLevel(Levels.MIDDLE)}
        >
          {I18n.t(`config.levels.MIDDLE`)}
        </Button>
        <Button
          mode={level === Levels.DIFFICULT ? 'contained' : 'outlined'}
          style={[styles.button, styles.wrapped]}
          onPress={() => setLevel(Levels.DIFFICULT)}
        >
          {I18n.t(`config.levels.DIFFICULT`)}
        </Button>
        <Button
          mode={level === Levels.ANY ? 'contained' : 'outlined'}
          style={[styles.button, styles.wrapped]}
          onPress={() => setLevel(Levels.ANY)}
        >
          {I18n.t(`config.levels.ANY`)}
        </Button>
      </View>
      <View style={styles.centered}>
        <Button style={styles.cta} onPress={startQuizz} mode="contained">
          {I18n.t('optionsScreen.playCta')}
        </Button>
        <Button style={styles.cta} onPress={() => setSeeMore(!seeMore)} mode="outlined">
          {seeMore ? I18n.t('optionsScreen.lessOptionsCta') : I18n.t('optionsScreen.moreOptionsCta')}
        </Button>
      </View>
      {seeMore && (
        <>
          <Text style={styles.header}>{I18n.t('optionsScreen.chapterHeader')}</Text>
          {Object.keys(Categories)
            .filter((category, _) => countByCategory[Categories[category]])
            .map((category, index) => (
              <Pressable
                key={index}
                onPress={() => onCheck(Categories[category])}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Checkbox status={checkedCategories.includes(Categories[category]) ? 'checked' : 'unchecked'} />
                <Text>
                  {I18n.t(`config.categories.${Categories[category]}`)} ({countByCategory[Categories[category]]})
                </Text>
              </Pressable>
            ))}
          <View style={styles.centered}>
            <Button style={styles.cta} onPress={startQuizz} mode="contained">
              {I18n.t('optionsScreen.playCta')}
            </Button>
            <Button style={styles.cta} onPress={() => setSeeMore(!seeMore)} mode="outlined">
              {seeMore ? I18n.t('optionsScreen.lessOptionsCta') : I18n.t('optionsScreen.moreOptionsCta')}
            </Button>
          </View>
        </>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
};

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
    margin: 4,
    flexBasis: '25%',
  },
  wrapped: {
    flexBasis: '40%',
  },
  centered: {
    marginTop: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.MAIN_COLOR,
  },
  cta: {
    marginVertical: 32,
    width: '45%',
  },
});

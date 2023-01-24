import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

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
        <Button
          type={number === 5 ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title="5"
          onPress={() => setNumber(5)}
        />
        <Button
          type={number === 10 ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title="10"
          onPress={() => setNumber(10)}
        />
        <Button
          type={number === 30 ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title="30"
          onPress={() => setNumber(30)}
        />
      </View>
      <Text style={styles.header}>{I18n.t('optionsScreen.timeHeader')}</Text>
      <View style={styles.options}>
        <Button
          type={time === 30 ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title={I18n.t('optionsScreen.shortTime')}
          onPress={() => setTime(30)}
        />
        <Button
          type={time === 120 ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title={I18n.t('optionsScreen.longTime')}
          onPress={() => setTime(120)}
        />
        <Button
          type={time === null ? 'solid' : 'outline'}
          containerStyle={styles.button}
          title={I18n.t('optionsScreen.noTime')}
          onPress={() => setTime(null)}
        />
      </View>
      <Text style={styles.header}>{I18n.t('optionsScreen.levelHeader')}</Text>
      <View style={styles.options}>
        <Button
          type={level === Levels.EASY ? 'solid' : 'outline'}
          containerStyle={[styles.button, styles.wrapped]}
          title={I18n.t(`config.levels.EASY`)}
          onPress={() => setLevel(Levels.EASY)}
        />
        <Button
          type={level === Levels.MIDDLE ? 'solid' : 'outline'}
          containerStyle={[styles.button, styles.wrapped]}
          title={I18n.t(`config.levels.MIDDLE`)}
          onPress={() => setLevel(Levels.MIDDLE)}
        />
        <Button
          type={level === Levels.DIFFICULT ? 'solid' : 'outline'}
          containerStyle={[styles.button, styles.wrapped]}
          title={I18n.t(`config.levels.DIFFICULT`)}
          onPress={() => setLevel(Levels.DIFFICULT)}
        />
        <Button
          type={level === Levels.ANY ? 'solid' : 'outline'}
          containerStyle={[styles.button, styles.wrapped]}
          title={I18n.t(`config.levels.ANY`)}
          onPress={() => setLevel(Levels.ANY)}
        />
      </View>
      <View style={styles.centered}>
        <Button containerStyle={styles.cta} title={I18n.t('optionsScreen.playCta')} onPress={startQuizz} type="solid" />
        <Button
          containerStyle={styles.cta}
          title={seeMore ? I18n.t('optionsScreen.lessOptionsCta') : I18n.t('optionsScreen.moreOptionsCta')}
          onPress={() => setSeeMore(!seeMore)}
          type="outline"
        />
      </View>
      {seeMore && (
        <>
          <Text style={styles.header}>{I18n.t('optionsScreen.chapterHeader')}</Text>
          {Object.keys(Categories)
            .filter((category, _) => countByCategory[Categories[category]])
            .map((category, index) => (
              <CheckBox
                key={index}
                checked={checkedCategories.includes(Categories[category])}
                onPress={() => onCheck(Categories[category])}
                title={`${I18n.t(`config.categories.${Categories[category]}`)} (${
                  countByCategory[Categories[category]]
                })`}
                containerStyle={styles.checkbox}
                textStyle={styles.checkboxText}
                uncheckedColor="grey"
                checkedColor={theme.MAIN_COLOR}
              />
            ))}
          <View style={styles.centered}>
            <Button
              containerStyle={styles.cta}
              title={I18n.t('optionsScreen.playCta')}
              onPress={startQuizz}
              type="solid"
            />
            <Button
              containerStyle={styles.cta}
              title={seeMore ? I18n.t('optionsScreen.lessOptionsCta') : I18n.t('optionsScreen.moreOptionsCta')}
              onPress={() => setSeeMore(!seeMore)}
              type="outline"
            />
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
    margin: 8,
    flexBasis: '25%',
  },
  wrapped: {
    flexBasis: '40%',
  },
  checkbox: {
    padding: 4,
    margin: 0,
    marginBottom: 4,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkboxText: {
    fontSize: theme.FONT_SIZE_S,
    fontWeight: 'normal',
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

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { loadQuizzResults } from '../utils/history';
import theme from '../utils/theme.js';
import I18n from '../utils/i18n';

function formatDate(date) {
  const d = new Date(date),
    year = d.getFullYear();
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

export default () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async function loadResults() {
      const loadedResults = await loadQuizzResults();
      setResults(loadedResults);
    })();
  }, []);

  const orderedResults = results.slice(0).reverse();

  let totalQuestions = 0,
    totalRightAnswers = 0;
  orderedResults.forEach((result) => {
    totalQuestions += result.quizzLength;
    totalRightAnswers += result.rightAnswersCount;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{I18n.t('historyScreen.questions', { count: totalQuestions })}</Text>
        <Text style={styles.headerText}>{I18n.t('historyScreen.rightAnwsers', { count: totalRightAnswers })}</Text>
        {results.length > 0 && (
          <Text style={styles.headerText}>
            {I18n.t('historyScreen.percentage', { count: Math.round((totalRightAnswers / totalQuestions) * 100) })}
          </Text>
        )}
      </View>
      {results.length === 0 && <Text style={styles.incentive}>{I18n.t('historyScreen.empty')}</Text>}
      <ScrollView>
        {orderedResults.map((result, index) => (
          <Text key={index}>
            {formatDate(new Date(result.createdAt))}-
            {I18n.t('historyScreen.result', {
              count: result.rightAnswersCount,
              total: result.quizzLength,
              percentage: ((result.rightAnswersCount * 100) / result.quizzLength).toFixed(),
            })}
          </Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    paddingBottom: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.MAIN_COLOR,
  },
  headerText: {
    fontSize: theme.FONT_SIZE_L,
  },
  incentive: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_M,
  },
});

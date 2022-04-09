import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { loadQuizzResults } from '../utils/history';
import theme from '../utils/theme.js';

function formatDate(date) {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
}

export default (props) => {
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
        <Text style={styles.headerText}>Questions : {totalQuestions}</Text>
        <Text style={styles.headerText}>Bonnes réponses : {totalRightAnswers}</Text>
        {results.length > 0 && (
          <Text style={styles.headerText}>
            Pourcentage : {Math.round((totalRightAnswers / totalQuestions) * 100)} %
          </Text>
        )}
      </View>
      {results.length === 0 && (
        <Text style={styles.incentive}>
          Il n'y a pas encore de résultats parce que tu n'as pas encore fait de quiz !
        </Text>
      )}
      <ScrollView>
        {orderedResults.map((result, index) => (
          <Text key={index}>
            {formatDate(new Date(result.createdAt))} - {result.rightAnswersCount} bonnes réponse sur{' '}
            {result.quizzLength} ({((result.rightAnswersCount * 100) / result.quizzLength).toFixed()} %)
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

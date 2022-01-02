import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { loadQuizzResults } from '../utils/history';
import theme from '../utils/theme.js';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

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

  let totalQuestions = 0, totalRightAnswers = 0;
  orderedResults.forEach((result) => {
    totalQuestions += result.quizzLength;
    totalRightAnswers += result.rightAnswersCount;
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Questions : {totalQuestions}</Text>
        <Text style={styles.headerText}>Bonnes réponses : {totalRightAnswers}</Text>
        <Text style={styles.headerText}>Pourcentage : {Math.round((totalRightAnswers / totalQuestions) * 100)} %</Text>
      </View>
      <ScrollView>
        {orderedResults.map((result, index) => (
          <Text key={index}>{formatDate(new Date(result.createdAt))} - {result.rightAnswersCount} bonnes réponse sur {result.quizzLength}</Text>
        ))}
      </ScrollView>
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
  header: {
    paddingBottom: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.MAIN_COLOR,
  },
  headerText: {
    fontSize: 20,
  },
});

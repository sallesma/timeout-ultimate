import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { loadQuizzResults } from '../utils/history';

export default (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async function loadResults() {
      const loadedResults = await loadQuizzResults();
      setResults(loadedResults);
    })();
  }, []);

  const orderedResults = results.slice(0).reverse();
  return (
    <View style={styles.container}>
      {orderedResults.map(result => (
        <Text>{result.rightAnswersCount} bonnes réponse sur {result.quizzLength}</Text>
      ))}
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
});

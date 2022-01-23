import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import rules from '../../data/rules';

export default (props) => {
  const Rule = ({rule}) => {
    const number = rule.match(/^(\d+.)+/)[0];
    const indentation = (number.match(/\d+./g) || []).length;

    return (
      <View style={{ marginLeft: 8 * indentation, marginBottom: 4}}>
        <Text>{rule}</Text>
      </View>
    )
  }
  console.log(rules);
  return (
    <ScrollView style={styles.container}>
      {rules.map((rule) => (<Rule rule={rule} />))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

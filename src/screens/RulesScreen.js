import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from 'react-native-elements';

import rules from '../../data/rules/rules';
import Chapter from '../components/rules/Chapter';

export default (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Object.keys(rules)}
        renderItem={({ item }) => (
          <Chapter
            title = {item}
            data = {rules[item]}
            />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

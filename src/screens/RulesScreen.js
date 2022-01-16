import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import rules from '../../assets/WFDF Rules of Ultimate 2021-2024 - French.pdf';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>À venir...</Text>
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

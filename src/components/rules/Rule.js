import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../../utils/theme.js';

export default ({rule}) => {
  const number = rule.match(/^(\d+.)+/)[0];
  const indentation = (number.match(/\d+./g) || []).length - 2;

  return (
    <View style={[styles.rule, indentation > 0 && styles.indented, { marginLeft: 16 * indentation}]}>
      <Text style={styles.text}><Text style={styles.number}>{number}</Text> {rule.replace(number, '')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rule: {
    marginBottom: 8,
  },
  indented: {
    paddingLeft: 8,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: theme.MAIN_COLOR,
  },
  number: {
    color: theme.MAIN_COLOR,
  },
  text: {
    color: 'black',
  },
});

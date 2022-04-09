import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Highlighter from 'react-native-highlight-words';

import theme from '../../utils/theme.js';
import Rule from './Rule';

export default ({ title, rules, searchText }) => {
  const [expanded, setExpanded] = useState(false);

  const number = title.match(/^(\d+.)+/)[0];

  let displayedRuleNumbers = Object.keys(rules);
  if (searchText.length > 0) {
    if (title.indexOf(searchText) === -1) {
      displayedRuleNumbers = displayedRuleNumbers.filter(
        (ruleNumber) => rules[ruleNumber].search(new RegExp(searchText, 'gi')) !== -1,
      );
      if (displayedRuleNumbers.length === 0) return null;
    }
  }

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={() => setExpanded(!expanded)}>
        <MaterialCommunityIcons name={expanded ? 'chevron-down' : 'chevron-right'} size={30} color="#666666" />
        <Highlighter
          style={styles.title}
          highlightStyle={{ backgroundColor: 'yellow' }}
          searchWords={[searchText]}
          textToHighlight={`${number} ${title.replace(number, '')}`}
        />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          {displayedRuleNumbers.map((ruleNumber) => (
            <Rule key={ruleNumber} number={ruleNumber} rule={rules[ruleNumber]} searchText={searchText} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.MAIN_COLOR,
  },
  title: {
    marginLeft: 8,
    fontSize: theme.FONT_SIZE_L,
  },
  content: {
    paddingVertical: 16,
  },
});

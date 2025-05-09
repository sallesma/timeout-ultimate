import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import rules from '../../../data/rules/rules';
import theme from '../../utils/theme.js';
import BottomSheet from '../shared/BottomSheet.js';
import I18n from '../../utils/i18n';

export default ({ ruleNumbers }) => {
  if (!ruleNumbers) return null;

  const [isVisible, setIsVisible] = useState(false);

  const flattenedRules = Object.values(rules).reduce(
    (accumulated, currentChapter) => Object.assign(accumulated, currentChapter),
    {},
  );

  return (
    <>
      <Button
        mode="outlined"
        style={styles.ctaContainer}
        labelStyle={styles.ctaText}
        onPress={() => setIsVisible(true)}
      >
        {I18n.t('questions.displayedRule.seeRule')}
      </Button>
      <BottomSheet onClose={() => setIsVisible(false)} isVisible={isVisible}>
        {ruleNumbers.map((ruleNumber) => (
          <View key={ruleNumber}>
            <Text style={styles.title}>{I18n.t('questions.displayedRule.ruleHeader', { number: ruleNumber })}</Text>
            <Text>{flattenedRules[ruleNumber]}</Text>
          </View>
        ))}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  ruleContainer: {
    backgroundColor: theme.MAIN_COLOR_LIGHT,
    padding: 16,
  },
  ctaContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  ctaText: {
    fontSize: theme.FONT_SIZE_S,
  },
  title: {
    fontSize: theme.FONT_SIZE_L,
  },
});
